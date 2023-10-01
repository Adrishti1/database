1.Fork the Repository:

Go to the GitHub repository you want to contribute to.
Click the "Fork" button in the upper right corner of the repository's page.
This will create a copy (fork) of the repository under your GitHub account.
2.Clone Your Fork:

On your forked repository, click the "Code" button and copy the URL of your repository.
Open your terminal or command prompt.
Use the git clone command to create a local copy of your fork:

git clone <your-fork-url>
3.Create a Branch:

Create a new branch for your contribution. This helps keep your changes isolated and makes it easier to manage and review them.
css

git checkout -b <branch-name>
4.Make Changes:

Make the necessary changes to the code or documentation in your local repository.
5.Commit Changes:

After making changes, commit them with a meaningful message:
sql

git add .
git commit -m "Your commit message here"
6.Push Changes:

Push your changes to your forked repository on GitHub:
perl

git push origin <branch-name>
7.Create a Pull Request (PR):

Go to your forked repository on GitHub.
You should see a green button labeled "Compare & pull request" when you push a new branch.
Click on it and fill out the PR form with a descriptive title and details about your changes.
Click "Create pull request" to submit it.
8.Review and Discussion:

The maintainers of the original repository will review your PR. Be prepared for feedback and make necessary changes if requested.
9.Merge Your PR:

Once your PR is approved, a maintainer of the original repository will merge your changes into the main branch.
