# 2021/09/18 上課筆記

## LINUX 基本指令

- 切換目錄      " cd 資料夾名稱 "
- 顯示目前路徑	" pwd "
- 新增資料夾	" mkdir 資料夾名稱 "
- 建立檔案      " touch 檔案名稱 "
- 複製檔案      " cp /原本路徑/檔名 /新的路徑/檔名 "
- 移動檔案      " mv /原本路徑/檔名 /新的路徑/檔名 "
- 更改檔名      " mv 舊檔名 新檔名 "
- 刪除檔案      " rm 檔名 "
- 刪除資料夾    " rm -r 資料夾名稱 "
- -r (recursive)    -> 刪除資料夾中的所有（包含資料夾）	
- -f (force)        -> 強制

## Git 設定流程

### Git設定檔
- 檔案位置： ~/.gitconfig
- 設定名稱： git config --global user.name "自訂使用名稱"
- 設定郵件： git config --global user.email "使用github的email"

> 在要被控管的專案底下輸入指令  
> 例如hello-git資料夾要被控管，即在hello-git資料夾中輸入

### 建立 repo
> repository （數據庫） → repo
1. 建立數據庫                   " git init "  
> 在hello-git檔案中 輸入 ls -al 就會出現 ***.git*** 隱藏資料夾
2. 檢查GIT狀態                  " git status "	
1. 將檔案納入GIT管理            " git add 檔名 "
1. 將檔案從站存區移出(尚未上傳) " git restore --staged 檔名 "
1. 從GIT中刪除檔案              " git rm 檔名 "
1. 將刪除的檔案救回(限有git的)  " git restore 檔名 "
1. 將首次要管理的檔案提交GIT    " git commit -m “版本差異的訊息” "	
1. 將已經版本控制過的檔案提交   " git commit -am “版本差異的訊息” "	
1. 檢視GIT版本詳細資料          " git log "		
1. 檢視版本差異(檢視新增/刪除)  " git diff "
1. 將檔案還原到某版本           " git checkout 版本號 檔名 "
1. 檢視內容是哪位成員編寫       " git blame 檔名 "

### 建立分支
1. 將預設 master 分支 改為 main
```bash=
nano ~/.gitconfig
```
```bash=
[init]
        defaultBranch = main
```
2. 將已經是 master 的 分支 改名(newname=新名稱)
```bash=
git branch -m master newname
```
2. 建立分支                    "git branch 名稱 "		
1. 檢視目前分支(*是所在分支)    " git branch "	
1. 切換到"名稱"分支             " git switch 名稱 "	
1. 將main及"名稱"的檔案合併     " git merge 名稱 "  
> 要先切換到 main 分支  
> 如有發生衝突，要進nano手動修改，保留需要的部分並儲存，再git上去

### 合併分支
1. 先切換到主要合併的branch（newname為要合併的branch）
```bash=
git merge newname
```
2. 如有衝突，可以進nano檢視並修改留下需要的部分。


### 建立遠端連線（將檔案上傳到GitHub）
1. 在GitHub上面建立一個新的 Repositories ( 例如 RnB )
2. 將Clone 的 http 複製起來並輸入
```bash=
git remote add origin https://github.com/Eddc125/RnB.git
```
> remote 遠端 、 origin 遠端的名字(不建議更改)
3. 將 commit 完的檔案上傳到GitHub
```bash=
git push -u origin main
```
> -u 首次push時才要加 、 main 要上傳的分支
4. 要同步遠端的檔案到本地
```bash=
git pull origin 遠端分支名
```

---
# 2021/09/19 上課筆記

## 安裝 nvm 及 node.js
[nvm下載網址](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.8)
1. 下載 [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip)
2. 解壓縮檔案，並且以**系統管理員**身分執行安裝
1. 安裝完成後，將GitBash 以**系統管理員**重新啟動
### nvm指令
1. 檢視nvm版本    " nvm -version "
1. 檢視windows可以安裝的node.js版本 " nvm list available "
> 分別為 CURRENT 、 LTS 、 EOL 版本 ， 建議安裝 LTS 版本  
> LTS 為 積極維護及升級版本
3. 安裝版本 " nvm install 版本號 "
1. 切換版本 " nvm use 版本號 "
1. 確認node目前使用版本 " node -v "
1. 列出電腦安裝的所有node版本   " nvm ls "
> 版本前加星號為目前使用中
7. 建立連線(在GitHub上建立好一個repo，複製http) " git clone 網址 "
8. 可以用 VSCode 編輯完.js檔後 用git push 上 GitHub 
9. 檢視.js檔案  " node 檔名 "
--- 

# Markdown 寫法：

## 標題
# "#" = h1
## "##" = h2
### "###" = h3
#### "####" = h4
##### "#####" = h5
###### "######" = h6

## 引用文字
> ">" = 這是一段引用文字

## 符號清單
- " - & + & * " = 清單
    - " - & + & * "  加上 tab 縮排後，會新增一個層級
+ 這是第一項清單
- 這是第二項清單
* 這是第三項清單

## 數字清單

1. 這是第一項清單
3. 這是第二項清單
5. 這是第三項清單

## 斜體
用 * 或是 _ 符號，把要顯示為斜體的文字包起來  
例如： 今天天氣*好熱*，想要待在冷氣房裡面。

## 強調
用兩個 ** 或是 __ 符號，把要強調的文字包起來  
例如： 今天天氣**好熱**，想要待在冷氣房裡面。

## 區塊程式碼
使用方式  
開頭使用3個 '‵‵‵' bash(js....)=  
    code  
結尾使用3個 '‵‵‵'  

```bash=
git add 檔名
git commit -m "版本資訊"
git push origin main 
```

```javascript=
function sum(a){
    let result = 0;
    for (i=0; i<a; i++){
        result += i;
    }
    console.log(result)
}
sum(6)
```

## 分隔線
--- 
---
"---" = 分隔線

## 表格
| 日期 | 早餐 | 午餐 | 晚餐 | 合計 |
|-------|------|------|------|------|
| 9/19 |  60  |  90  |  120 |  270 |

## 圖片
" 使用 ! + [ ] + (圖片網址) "  
![](https://pbs.twimg.com/profile_images/1389052581121466369/SDvbkP06.jpg)

## 影片
" 使用 [ 顯示文字 ] + ( 影片網址 ) "  
[腦科學驚人發現!](https://www.youtube.com/watch?v=DgbSc6Ys710&ab_channel=%E8%B6%85%E7%B4%9A%E6%AD%AASuperY)

---
# 2021/09/19 上課筆記

### 練習平台： [leetcode](https://leetcode.com/interview/?gclid=Cj0KCQjw18WKBhCUARIsAFiW7JzMtktV0Ksqph0YLvR7ZqfGl7jl8Eho4bs_GZyOUsaPMVB2-_OrnM4aAhBaEALw_wcB)

---
# 2021/10/03 上課筆記
angular,react,vue --> SPA( Single Page Application ) 前後端 --> SEO 比較不友善

SSR : Server-side render

jQuery -> 操作 DOM 物件
$("#name")

angular,react,vue 幫你渲染畫面 --> 這些畫面上的 dom 物件是由這些框架來控制 --> 控制「狀態」 state

[ES6常用語法](https://gretema.github.io/javascript/20200504/221423942/)

---
## 下方為上課練習作業


## Please README

Taste of Love
---
- JYPE
- 2021/06/11
- 10th mini album
---

![](https://www.allkpop.com/upload/2021/06/content/231440/web_data/allkpop_1624474112_untitled-1.jpg)
[TWICE - Alcohol Free](https://www.youtube.com/watch?v=XA2YEHn-A8Q&ab_channel=JYPEntertainment)
