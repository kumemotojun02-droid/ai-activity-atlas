// Presentation examples only. Never infer live counts or sales from these samples.
const basic={monthly:'商品ラインナップの充実',ongoing:'出品候補と既存商品の構成を整理している',shared:'商品画像・説明・登録内容を整える'};
const shoes={monthly:'用途別のラインナップを広げる',ongoing:'色・サイズの構成と商品表現を整えている',shared:'MY・PH・THの3店で商品表現とバリエーション構成を揃える'};
export const statuses=Object.fromEntries(['my','tw','sg','thtools','phtools','mytools','thshoes','myshoes','phshoes','sgzakka','thzakka','phzakka','mytowel','thtowel'].map(id=>[id,{...basic,productCount:null,sales:null,updatedAt:null}]));
for(const id of ['thshoes','myshoes','phshoes'])statuses[id]={...statuses[id],...shoes};
statuses.myshoes.ongoing='用途ごとの商品構成を確認し、追加候補を整理している';
statuses.phshoes.ongoing='人気商品の周辺にある関連モデルを調べている';
statuses.thshoes.ongoing='商品画像と色・サイズの見せ方を整えている';
statuses.tw.monthly='扱うジャンルと商品群を広げる';statuses.tw.ongoing='追加候補の商品群を整理している';
statuses.sg.monthly='タオル専門店のラインナップを充実させる';
export const shoeOverview={monthly:'3店で共通の商品構成と制作ルールを育てる',ongoing:'国ごとの候補と、共通で展開するモデルを整理している',shared:'各店の活動をつなぎ、重複する制作をまとめる',productCount:null,sales:null,updatedAt:null};
