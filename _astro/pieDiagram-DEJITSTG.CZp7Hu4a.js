import{Q as y,bz as z,i as J,ac as K,bo as Y,ad as tt,bp as et,ai as at,br as nt,e as d,b0 as R,ag as rt,y as it,bn as st,b9 as ot,P as lt,z as ct,a5 as ut}from"./PostDetails.astro_astro_type_script_index_0_lang.VTu63WyA.js";import{p as dt}from"./chunk-4BX2VUAB.DZ7O9r1h.js";import{p as pt}from"./wardley-RL74JXVD.CapSxyg6.js";import{d as I}from"./arc.B9h8M6H_.js";import{o as gt}from"./ordinal.BYWQX77i.js";function ft(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ht(t){return t}function mt(){var t=ht,a=ft,f=null,S=y(0),s=y(z),p=y(0);function o(e){var r,l=(e=J(e)).length,g,h,v=0,c=new Array(l),i=new Array(l),x=+S.apply(this,arguments),w=Math.min(z,Math.max(-z,s.apply(this,arguments)-x)),m,D=Math.min(Math.abs(w)/l,p.apply(this,arguments)),$=D*(w<0?-1:1),u;for(r=0;r<l;++r)(u=i[c[r]=r]=+t(e[r],r,e))>0&&(v+=u);for(a!=null?c.sort(function(A,C){return a(i[A],i[C])}):f!=null&&c.sort(function(A,C){return f(e[A],e[C])}),r=0,h=v?(w-l*$)/v:0;r<l;++r,x=m)g=c[r],u=i[g],m=x+(u>0?u*h:0)+$,i[g]={data:e[g],index:r,value:u,startAngle:x,endAngle:m,padAngle:D};return i}return o.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),o):t},o.sortValues=function(e){return arguments.length?(a=e,f=null,o):a},o.sort=function(e){return arguments.length?(f=e,a=null,o):f},o.startAngle=function(e){return arguments.length?(S=typeof e=="function"?e:y(+e),o):S},o.endAngle=function(e){return arguments.length?(s=typeof e=="function"?e:y(+e),o):s},o.padAngle=function(e){return arguments.length?(p=typeof e=="function"?e:y(+e),o):p},o}var vt=ut.pie,W={sections:new Map,showData:!1},T=W.sections,F=W.showData,xt=structuredClone(vt),yt=d(()=>structuredClone(xt),"getConfig"),St=d(()=>{T=new Map,F=W.showData,ct()},"clear"),wt=d(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),R.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),At=d(()=>T,"getSections"),Ct=d(t=>{F=t},"setShowData"),Dt=d(()=>F,"getShowData"),_={getConfig:yt,clear:St,setDiagramTitle:nt,getDiagramTitle:at,setAccTitle:et,getAccTitle:tt,setAccDescription:Y,getAccDescription:K,addSection:wt,getSections:At,setShowData:Ct,getShowData:Dt},$t=d((t,a)=>{dt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Tt={parse:d(async t=>{const a=await pt("pie",t);R.debug(a),$t(a,_)},"parse")},bt=d(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=bt,Et=d(t=>{const a=[...t.values()].reduce((s,p)=>s+p,0),f=[...t.entries()].map(([s,p])=>({label:s,value:p})).filter(s=>s.value/a*100>=1);return mt().value(s=>s.value).sort(null)(f)},"createPieArcs"),Mt=d((t,a,f,S)=>{R.debug(`rendering pie chart
`+t);const s=S.db,p=rt(),o=it(s.getConfig(),p.pie),e=40,r=18,l=4,g=450,h=g,v=st(a),c=v.append("g");c.attr("transform","translate("+h/2+","+g/2+")");const{themeVariables:i}=p;let[x]=ot(i.pieOuterStrokeWidth);x??=2;const w=o.textPosition,m=Math.min(h,g)/2-e,D=I().innerRadius(0).outerRadius(m),$=I().innerRadius(m*w).outerRadius(m*w);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+x/2).attr("class","pieOuterCircle");const u=s.getSections(),A=Et(u),C=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let b=0;u.forEach(n=>{b+=n});const G=A.filter(n=>(n.data.value/b*100).toFixed(0)!=="0"),k=gt(C).domain([...u.keys()]);c.selectAll("mySlices").data(G).enter().append("path").attr("d",D).attr("fill",n=>k(n.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(G).enter().append("text").text(n=>(n.data.value/b*100).toFixed(0)+"%").attr("transform",n=>"translate("+$.centroid(n)+")").style("text-anchor","middle").attr("class","slice");const V=c.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),L=[...u.entries()].map(([n,M])=>({label:n,value:M})),E=c.selectAll(".legend").data(L).enter().append("g").attr("class","legend").attr("transform",(n,M)=>{const O=r+l,Z=O*L.length/2,q=12*r,H=M*O-Z;return"translate("+q+","+H+")"});E.append("rect").attr("width",r).attr("height",r).style("fill",n=>k(n.label)).style("stroke",n=>k(n.label)),E.append("text").attr("x",r+l).attr("y",r-l).text(n=>s.getShowData()?`${n.label} [${n.value}]`:n.label);const U=Math.max(...E.selectAll("text").nodes().map(n=>n?.getBoundingClientRect().width??0)),j=h+e+r+l+U,N=V.node()?.getBoundingClientRect().width??0,Q=h/2-N/2,X=h/2+N/2,P=Math.min(0,Q),B=Math.max(j,X)-P;v.attr("viewBox",`${P} 0 ${B} ${g}`),lt(v,g,B,o.useMaxWidth)},"draw"),zt={draw:Mt},Pt={parser:Tt,db:_,renderer:zt,styles:kt};export{Pt as diagram};
