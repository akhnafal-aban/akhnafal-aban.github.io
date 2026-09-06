#!/usr/bin/env bash
# Build + push dist to gh-pages branch (GitHub Pages, legacy branch source).
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ npm run build"
npm run build

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
git worktree add -q "$TMP" gh-pages 2>/dev/null && {
  git -C "$TMP" checkout -q gh-pages 2>/dev/null || true
  rm -rf "$TMP"/*
  cp -R dist/* "$TMP"/
  git -C "$TMP" add -A
  git -C "$TMP" commit -q -m "Deploy: build $(date -u +%Y-%m-%dT%H:%MZ)" || echo "  (no changes)"
  git -C "$TMP" push -q origin gh-pages
  git worktree remove "$TMP" -f
} || {
  echo "creating gh-pages..."
  git branch gh-pages 2>/dev/null || true
  git worktree add -q -B gh-pages "$TMP"
  rm -rf "$TMP"/*
  cp -R dist/* "$TMP"/
  git -C "$TMP" add -A
  git -C "$TMP" commit -q -m "Deploy: build $(date -u +%Y-%m-%dT%H:%MZ)"
  git -C "$TMP" push -q -u origin gh-pages
  git worktree remove "$TMP" -f
}
echo "✓ deployed → https://akhnafal-aban.github.io/"
