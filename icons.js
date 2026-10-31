// Service marks identify destinations, not live integrations or endorsements.
const brands={chatgpt:'openai',claude:'claude',grok:'grok',gemini:'googlegemini',x:'x',threads:'threads'};
const shapes={
 atlas:'<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-35 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(35 12 12)"/>',
 project:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
 shopee:'<path d="M5 8h14l1 13H4L5 8Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2M9 13h6M9 16h4"/>',
 research:'<path d="M9 3h6M10 3v6l-6 10a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10"/><circle cx="10" cy="17" r=".7"/>',
 search:'<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>',
 comic:'<path d="M4 3h16v14H9l-5 4V3Z"/><path d="M8 7h8M8 11h5"/>',
 code:'<rect x="2" y="4" width="20" height="16" rx="4"/><path d="m7 9 3 3-3 3M13 15h4"/>',
 image:'<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
 chart:'<path d="M3 3v18h18M7 16v-5M12 16V7M17 16V4"/>',
 team:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M19 20v-2a5 5 0 0 0-3-4"/>',
 process:'<rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M9 6h9v6M6 9v9h6m3-9 3 3 3-3"/>',
 idea:'<path d="M8 15c0-3-3-3-3-7a7 7 0 0 1 14 0c0 4-3 4-3 7M8 15h8v4H8v-4ZM10 22h4M9 8l3 3 3-3M12 11v4"/>',
 note:'<path d="M5 3h10l4 4v14H5V3ZM15 3v5h4M8 12h8M8 16h6"/>',
 revenue:'<path d="M3 20h18M5 16l5-5 4 3 6-9M15 5h5v5"/>',
 agent:'<circle cx="12" cy="12" r="9"/><path d="M8 9h.01M16 9h.01M8 15c2 2 6 2 8 0"/>',
 muse:'<circle cx="6" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 16v3h12v-3"/>',
 channel:'<path d="M3 11V7l14-4v18L3 17v-6ZM17 8l4 2v4l-4 2M5 18l2 4h4l-2-4"/>'
};
const named={atlas:'atlas',shopee:'shopee',comic:'comic',lab:'research',revenue:'revenue',codex:'code',muse:'muse',note:'note',listinghub:'process',publishing:'process',aiteam:'team',sourcing:'search',preparation:'image',drawing:'image',atlasbuild:'code',interfaceidea:'code',analysishub:'chart',analysis:'chart',improvement:'research',shoecoord:'team',shoegroup:'team',studythread:'research',moneythread:'search',shopthread:'process',fragments:'research',cultures:'comic',autonomous:'revenue',spark:'idea'};
const image=(key)=>{const el=document.createElement('img');el.src='assets/'+brands[key]+'.svg';el.alt='';el.draggable=false;return el;};
export function makeIcon(id,node){const el=document.createElement('span');el.className='identity-icon';el.setAttribute('aria-hidden','true');if(brands[id]){el.classList.add('brand-mark');el.append(image(id));}else{const shape=named[id]||(['agent','idea','channel'].includes(node.type)?node.type:'project');el.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round">${shapes[shape]}</svg>`;}return el;}
export function makeHostBadge(host){if(!brands[host]&&host!=='codex'&&host!=='muse')return null;const el=document.createElement('span');el.className='host-badge';el.setAttribute('aria-hidden','true');if(brands[host])el.append(image(host));else el.textContent=host==='codex'?'>_':'••';return el;}
