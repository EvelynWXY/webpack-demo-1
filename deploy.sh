yarn build && #得到一个最新的dist
git checkout gh-pages && #进入到gh-pages 分支
rm -rf *.html *.js *.css *.png&&
# rm -rf src *.sh *.js *json yarn.lock 只有第一次需要删除
mv dist/* ./ &&#将dist文件里所有的文件移动到当前目录
rm -rf dist; #删除dist文件
git add . &&
git commit -m 'update' &&
git push
