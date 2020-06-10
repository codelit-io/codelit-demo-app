**Clone**

Open project in Github desktop or fork/clone repo. Then `yarn` and `yarn start` to start localhost

**Branches**

All work is done in feature branches, branched from master and after a verified PR, merged back to master

**Test**

Write test code if possible, make sure to run testing locally. Since most components use snapshot testing, run `yarn test` and click `u` to update snapshots if needed.

**Commits**

Follow this [naming convention](https://www.conventionalcommits.org/en/v1.0.0/) to write your commits, commit as much as possible

**PR**

Creating a PR to merge to Master triggers CircleCi to run a build, test, lint the code in the PR to make sure it's good to go!! Use Github Desktop and Gitlense VS code extension


**Release**

Merge PR to Release branch to trigger a release, then CircleCi will deploy the code to firebase hosting


