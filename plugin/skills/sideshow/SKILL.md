---
name: shuvshow
description: Publish live HTML previews to the user's shuvshow surface and receive their comments back as notifications. Use when the user asks you to illustrate, visualize, sketch, or draw something, mentions shuvshow, or when a visual would explain your work better than text.
---

# shuvshow (plugin)

The user keeps a shuvshow surface open in their browser. You publish HTML
snippets to it; they appear instantly. The user comments on any snippet, and
**this plugin streams those comments to you as notifications** — you do not
poll or arm a watcher. It is a two-way surface, not a fire-and-forget renderer.

## How feedback reaches you

A background monitor (`shuvshow watch`) runs for the whole session and delivers
each new user comment as a notification on your next turn, for example:

```
shuvshow comment on “Cache layout” (snippet a1b2c3): “tighten the spacing”
```

Treat every such line as a message from the user. Respond by revising the
snippet it refers to (`update_snippet` / `shuvshow update <id>`) or replying
(`reply_to_user` / `shuvshow comment`). Comments are delivered exactly once —
you will not see the same one twice, so act on each when it arrives. You never
need to call `wait_for_feedback` just to stay aware of comments; the monitor
already does that. (Publish/update/reply responses may still carry a
`userFeedback` array; it is the same stream, also delivered once.)

## Before your first publish

Fetch the design contract once per session (fragment rules, theme CSS
variables, CDN allowlist, sizing):

- MCP: `get_design_guide`
- CLI: `shuvshow guide`

## Publishing

Prefer the MCP tools when connected (`publish_snippet`, `update_snippet`,
`wait_for_feedback`, `reply_to_user`); otherwise use the CLI. Session grouping
is automatic.

```sh
shuvshow publish sketch.html --title "Cache layout" --session-title "Cache redesign"
echo '<p>...</p>' | shuvshow publish - --title "Quick note"
```

Rules of thumb:

- On your first publish, set a session title that names the task ("Auth
  refactor"), not the tool — `sessionTitle` (MCP) / `--session-title` (CLI). It
  applies only when the session is created; never retitle later (the user may
  have renamed it in the viewer).
- One concept per snippet, with a clear title. A series of small snippets beats
  one giant page.
- Iterate with `update_snippet` / `shuvshow update <id>` (same card, new
  version) instead of publishing near-duplicates.
- Use the kit from the design guide (pre-styled form elements, SVG utility
  classes) before writing CSS; otherwise use the theme CSS variables so
  snippets work in dark mode.

## Configuration

The plugin targets the server set in its config (`shuvshowUrl`, default
`http://localhost:8228`; `apiToken` for deployed instances). Start a local
server with `npx shuvshow serve` if one is not already running.
