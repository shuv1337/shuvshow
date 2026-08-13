# Intentional shuvshow upstream delta

shuvshow is maintained by [shuv1337](https://github.com/shuv1337) as a fork of
[sideshow](https://github.com/modem-dev/sideshow). The initial rebrand baseline is upstream release
`v0.13.0`, commit `81b65eba3080` in this repository's shared ancestry.

## Deliberate differences

- Public product, repository, npm package, executable, plugin, skill, documentation, and update-channel
  identity use `shuvshow`.
- The viewer uses a distinct shuv devil-family mark and restrained Midnight Brick brand treatment.
- Fork releases and deployment examples point to `shuv1337/shuvshow` and the `shuvshow` npm package.

## Compatibility identifiers retained

The following remain `sideshow` unless a separate migration is designed:

- `SIDESHOW_*` environment variables and the default `~/.sideshow` data directory.
- Existing database filenames, SQLite index names, Durable Object class names, cookies, and local
  storage keys.
- HTTP routes, payload fields, legacy route aliases, MCP tool aliases, and the `__sideshow` iframe
  bridge discriminator.
- Pi's existing `sideshow_*` tool names, which remain callable while visible extension chrome and the
  command use `shuvshow`.
- Existing embed globals and TypeScript host names such as `__SIDESHOW_*` and `SideshowHost`.

These are compatibility identifiers, not incomplete visible branding. Do not mechanically rename
them during upstream conflict resolution.

## Upstream sync

The local `upstream` remote points to `https://github.com/modem-dev/sideshow.git`.

1. Run `jj git fetch --remote upstream`.
2. Create a dedicated change/bookmark such as `sync/upstream-YYYY-MM-DD`.
3. Inspect incoming commits and the complete three-way delta.
4. Merge upstream ancestry; do not squash it into an opaque rewrite.
5. Resolve conflicts using this document, keeping fork branding and compatibility identifiers in their
   respective layers.
6. Run `npm run brand:check` and the repository validation suite.
7. Submit upstream syncs as dedicated PRs and update this document when intentional divergence changes.

## Attribution

The upstream MIT license and Ben Vinegar's copyright notice remain unchanged in `LICENSE`. Historical
release notes and design documents may retain the upstream name when they describe upstream behavior.
