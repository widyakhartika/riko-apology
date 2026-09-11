# RIKO.EXE — Apology Quest

A small interactive apology website made with plain HTML, CSS and JavaScript.

## 1. Folder structure

```text
riko-apology/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── photos/
    │   ├── photo-01.jpg
    │   └── photo-02.jpg
    ├── videos/
    │   ├── video-01.mp4
    │   ├── video-02.mp4
    │   ├── video-03.mp4
    │   ├── video-04.mp4
    │   └── video-05.mp4
    └── music/
        └── on-bended-knee.mp3
```

## 2. Add your media

Rename your files exactly:

- photo-01.jpg
- photo-02.jpg
- video-01.mp4 through video-05.mp4
- on-bended-knee.mp3

Put them in the matching `assets` folders.

If your photos are PNG, change the extension in `index.html` from `.jpg` to `.png`.

## 3. Personalize the apology

Open `index.html` and search for:

`<div class="paper">`

Replace the paragraphs inside the paper with your own message. The existing text is only a placeholder.

You can also change captions, jokes, and the final message.

## 4. Test locally

You can simply double-click `index.html` for a first visual test.

For a better local test, in VS Code install the "Live Server" extension, right-click `index.html`, then choose "Open with Live Server".

## 5. Publish with GitHub Pages

1. Create a GitHub repository named `riko-apology`.
2. Upload the project files.
3. Open the repository's Settings.
4. Find Pages.
5. Under deployment/source, select the branch containing your files (normally `main`) and the root folder `/`.
6. Save.
7. GitHub will give you a Pages URL similar to:
   `https://YOUR-USERNAME.github.io/riko-apology/`

## 6. Important GitHub Pages limitation

GitHub repositories have practical file-size limits. Large videos are not ideal to store directly in a repository. If your 5 videos are large, compress them first or host the videos separately and change the `<video src="...">` URLs.

For this project, try to keep each video reasonably small and optimized for web/mobile.

## 7. Before sending the link

Test it on your phone using mobile data, not only on your own Wi-Fi.

Checklist:

- [ ] Start button works
- [ ] Photos load
- [ ] All 5 videos load
- [ ] Music works after pressing Start / opening Music Player
- [ ] Letter has been personalized
- [ ] Final Level unlocks after 5 clues
- [ ] YES and NOT READY endings work
- [ ] Mobile layout looks good
- [ ] No private files accidentally included
