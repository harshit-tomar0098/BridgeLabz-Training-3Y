# JavaScript Assignment 4

Solutions for Questions 1–9 using core JavaScript (ES6+), without frameworks.

## Files and how to run

### Run in Node.js
Open a terminal in this folder and run:

```bash
node q1-product-manager.js
node q3-library-management.js
node q6-employee-management.js
```

### Run browser-based questions
Open each HTML file in a browser (double-click it, or use VS Code Live Server if available):

- `q2-student-form-validator.html`
- `q4-custom-form-builder.html`
- `q5-movie-ticket-booking.html`
- `q7-login-validation.html`
- `q8-dynamic-object-updater.html`
- `q9-shopping-cart.html`

Each HTML file loads its matching JavaScript file. Keep the HTML and JS files in the same folder.

## Push this folder to your `js_practice` branch

Run these commands from the root of your existing Git repository (the folder containing `.git`).

1. Copy this entire `js-assignmnent-4` folder into that repository.
2. Open terminal in the repository root.
3. Check your current branch and working tree:

```bash
git status
git branch
```

4. Switch to the requested branch (if it already exists locally):

```bash
git switch js_practice
```

If the branch exists on GitHub but not locally, use:

```bash
git fetch origin
git switch --track origin/js_practice
```

If neither local nor remote branch exists and you need to create it:

```bash
git switch -c js_practice
```

5. Stage only this assignment folder, commit, and push:

```bash
git add js-assignmnent-4
git commit -m "Add JavaScript assignment 4 solutions"
git push -u origin js_practice
```

If Git says there is nothing to commit, run `git status` and confirm that the folder is inside the repository and that the files are saved.

**Important:** Run `git status` before committing. If you have unrelated changes, do not stage them with `git add .`; stage only `js-assignmnent-4` as shown above.
