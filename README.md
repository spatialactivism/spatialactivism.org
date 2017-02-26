# spatialactivism.org


## development:

#### start development server:

- `npm install`
- `npm start`
- go to `http://localhost:8082`

#### notes on npm & webpack

- requirements should be added via `npm install --save MODULENAME`
- web files are in `./site`
- `bundle.js` loads all js
- `bundle.cs` loads all css. 
  - note - some css may be `.scss` [Sass](http://sass-lang.com/) files

## deployment:

#### build files:

- run `npm run build`
- files are in `./dist`
- `git commit -am 'commit message here'`

#### deploy to spatialactivism.org

Any pushed changes to the `deploy` branch gets automagically pushed to spatialactivism.org via a [post-receive hook](https://github.com/markomarkovic/simple-php-git-deploy):

- do things in master, commit, push
- `git checkout deploy`
- `git merge master`
- `git commit -am 'deploy message here'`
- `git push`
- http://www.spatialactivism.org should have been updated!
- remember to switch back to the master branch with `git checkout master`!

(if `git push` doesn't work, try `git push --set-upstream origin deploy`)
