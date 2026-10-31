export const nodes = {
 atlas:['AI Activity\nAtlas','すべての活動を、一つの宇宙へ。','#b9b0ff'],
 shopee:['Shopee事業','ショップから、その先の活動へ。','#6ce3c0'],
 research:['AI自律探索','問いから、新しい問いが生まれる。','#b5a1ff'],
 sns:['SNS・AI漫画','物語と発信がつながる場所。','#ffbd87'],
 work:['AI受託案件','AIの能力を、価値へつなぐ。','#85c8ff'],
 system:['AI管理基盤','活動をつなぎ、見渡す仕組み。','#f3a9d0'],
 my:['MY雑貨店','ショップ運営のサンプル。','#6ce3c0'],tw:['台湾Zakka','商品展開のサンプル。','#6ce3c0'],sg:['SGタオル店','専門店運営のサンプル。','#6ce3c0'],
 grok:['Grok Bot','発信を担うAIのサンプル。','#ffbd87'],muse:['Muse','複数の活動に接続するAI。','#ffbd87'],hoz:['Dots / Hoz','活動をつなぐAIのサンプル。','#f3a9d0'],codex:['Codex','制作と実装を担うAIのサンプル。','#85c8ff'],claude:['Claude','設計と制作のサンプル。','#b5a1ff'],gemini:['Gemini','調査と探索のサンプル。','#85c8ff'],comic:['AI漫画制作','アイデアから物語へ。','#ffbd87'],revenue:['収益探索','仮説を検証し、次の問いへ。','#b5a1ff']};
export const edges = [['atlas','shopee'],['atlas','research'],['atlas','sns'],['atlas','work'],['atlas','system'],['shopee','my'],['shopee','tw'],['shopee','sg'],['shopee','codex'],['research','revenue'],['research','gemini'],['research','claude'],['research','hoz'],['sns','grok'],['sns','muse'],['sns','comic'],['comic','claude'],['comic','codex'],['work','codex'],['work','claude'],['work','revenue'],['system','hoz'],['system','codex'],['system','muse']];
