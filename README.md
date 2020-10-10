# Geektoberfest-Main

![Geektoberfest](https://i.imgur.com/iKygvxX.jpg)

## About us

GeektoberFest’20 is a 20 day long open source event running in parallel with the Hacktober fest organised by [GeekHaven IIIT Allahabad](https://geekhaven.iiita.ac.in). We have set up some beginner friendly repositories to help you begin your journey in the daunting world of open source and help you take your first step in your development career. 


## RULES
- To be eligible for the prizes all participants must submit a minimum of 4 PR’s in the GeektoberFest'20 repositories.

- Since we have limited repos and we want everyone to get the chance to contribute, **participants cannot submit more than 6 PRs to the GeektoberFest'20 repositories**.

- After submission of the PR’s on the GeektoberFest'20 repositories (Min 4 and Max 6) participants can keep contributing to other open source projects to become the best contributors and win additional prizes.

- **After every Pull Request of yours that gets merged, you have to add its details to your contribution JSON file so that we can keep track of your contributions. Instructions on how to add PR details are given below**

- By the end of the fest best contributors would be decided on the basis of the quality and quantity of their contributions.

## Adding your Pull Requests

To add your pull requests, open `contributions` folder and in their add your own json file with **file name as your Github Username**. Please maintain the following format EXACTLY (replacing values where indicated):
```json
     {
        "name" : "Participant Name",
        "imageurl" : "https://sample-website/image.jpg",
        "about" : "Hello I'm a web developer",
        "facebook": "facebook-url",
        "github" : "github-url",
        "prs": [
            "https://github.com/link/to/pr/1",
            "https://github.com/link/to/pr/2",
            ...
        ]
     }
```
**As you get more PRs merged, you can keep updating the same file. A sample file has been placed in the folder for your convenience. Make sure to update your file as soon as you get a PR merged.**

IMPORTANT:
- imageurl is the URL to the your profile image. You can use the URL of any one of your social profile picture or host a picture yourself through imgur or similar service.
- The image should be of square resolution.
- If you do not want to include social media accounts, leave the field empty like `"facebook":""`.
- While working with JSON, check the file using [JSON Lint](https://jsonlint.com/) before opening pull request

## Contributing

#### Getting started

We will follow the official GitHub documentation for setting up the repo.

- Forking and cloning the repository

  > [Link to GitHub Docs](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)

  By forking a repository you create your own copy of the project and make your changes there. Cloning a project means that you are setting up the project on your local system.

- Syncing a fork

  > [Link to GitHub docs](https://help.github.com/articles/syncing-a-fork/)

  We keep our fork in sync to the original repository so that our copy of the project has the latest changes from the original project.

- Making changes to project and committing a change

  > [Link to docs](https://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html#commit-your-changes)

  Committing means making changes to the project and adding your changes to the GitHub.

- Making a pull request

  > [Link to docs](https://help.github.com/articles/about-pull-requests/)

  - Pull request means submitting your changes to the original project for the review. Once the maintainers of the project feel that your changes are appropriate then your pull request will be merged.

* Add relevant commit message in the pr, mention issue number and live link to comment while making pr.
* **Note**: In case you feel any issue during setting up the project or using git, don't hesitate to ask us on our slack channel. We will help you out.

## Guidelines and Best practices

Please help us follow the best practice to make it easy for the reviewer as well as the contributor. We want to focus on the code quality more than on managing pull request ethics.

- People before code: If any of the following rules are violated, the pull-requests must not be rejected. This is to create an easy and joyful onboarding process for new programmers and first-time contributors.

- Single commit per pull request and name the commit as something meaningful, example: Updating <-username->'s PR file with a new PR in <-repo-name->.

- Reference the issue numbers in the commit message if it resolves an open issue. Follow the pattern Fixes #<-issue number-> <-commit message->

- Provide the link to live gh-pages from your forked repository or relevant screenshot for easier review.

- Pull Request older than 3 days with no response from the contributor shall be marked closed.

- Do not make PR which is not related to any issues. You can create an issue and solve it once we approve them.

- Avoid duplicate PRs, if need be comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.

- Be polite: Be polite to other community members.

- Communicate: Whether you are working on a new feature or facing a doubt please feel free to ask us on our slack channel. We will be happy to help you out.

### Happy Coding :v: