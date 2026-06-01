import{t as e}from"./rolldown-runtime.BO1CHSEM.mjs";import{S as t,_ as n,c as r,k as i,l as a,o}from"./react.BEImuny9.mjs";import{S as s,t as c}from"./motion.BpecLzlp.mjs";import{L as l,r as u,y as d}from"./framer.Cf7YHaI-.mjs";function f(e){let{heading:t,body:i,image:o={src:`https://framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg`,alt:`Pressure washing`},primaryLabel:s,primaryLink:c,secondaryLabel:l,secondaryLink:u,backgroundColor:d,textColor:f,primaryBg:p,primaryText:m,secondaryBorder:h,secondaryText:g,headingFont:_,bodyFont:v,buttonFont:y,paddingTop:b,paddingRight:x,paddingBottom:S,paddingLeft:C,tabletTopOffset:w,mobileTopOffset:T,marginTop:E,marginRight:D,marginBottom:O,marginLeft:k,contentGap:A,imageSizeDesktop:j,imageSizeMobile:M,imageRadius:N,buttonRadius:P,buttonPaddingY:F,buttonPaddingX:I,style:L}=e,R=`pwSection_${n().replace(/:/g,``)}`,z=c||``,B=u||``;return a(`section`,{className:R,style:{...L,position:`relative`,width:`100%`,height:`100%`,background:d,color:f,overflow:`hidden`,marginTop:E,marginRight:D,marginBottom:O,marginLeft:k},"aria-label":`Service overview`,children:[r(`style`,{children:`
                .${R} {
                    box-sizing: border-box;
                    padding-top: 0px;
                }

                .${R} .wrap {
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: ${b}px ${x}px ${S}px ${C}px;
                    margin: 0;
                }

                .${R} .grid {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: ${A}px;
                    align-items: start;
                }

                .${R} .copy {
                    min-width: 0;
                }

                .${R} .heading {
                    margin: 0;
                    padding: 0;
                    letter-spacing: -0.04em;
                }

                .${R} .body {
                    margin-top: 18px;
                    white-space: pre-wrap;
                }

                .${R} .body p {
                    margin: 0 0 14px 0;
                }
                .${R} .body p:last-child { margin-bottom: 0; }

                .${R} .actions {
                    margin-top: 26px;
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .${R} .btn {
                    appearance: none;
                    border: none;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    border-radius: ${P}px;
                    padding: ${F}px ${I}px;
                    line-height: 1;
                    cursor: pointer;
                    user-select: none;
                    transition: transform 0.12s ease, filter 0.12s ease, background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease;
                    min-height: 44px;
                }

                .${R} .btn:focus-visible {
                    outline: 2px solid rgba(0,0,0,0.25);
                    outline-offset: 3px;
                }

                .${R} .btn:hover { filter: brightness(0.98); }
                .${R} .btn:active { transform: translateY(1px); }

                .${R} .btnPrimary {
                    background: ${p};
                    color: ${m};
                }

                .${R} .btnSecondary {
                    background: transparent;
                    color: ${g};
                    border: 2px solid ${h};
                }

                .${R} .imageCol {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    min-width: 0;
                }

                .${R} .circle {
                    width: ${j}px;
                    height: ${j}px;
                    border-radius: ${N}px;
                    overflow: hidden;
                    background: rgba(0,0,0,0.04);
                }

                .${R} .circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                @media (max-width: 920px) {
                    .${R} {
                        padding-top: ${w}px;
                    }
                    .${R} .wrap {
                        padding: ${Math.max(18,Math.round(b*.7))}px ${Math.max(18,Math.round(x*.7))}px ${Math.max(18,Math.round(S*.7))}px ${Math.max(18,Math.round(C*.7))}px;
                    }
                    .${R} .grid {
                        grid-template-columns: 1fr;
                        gap: ${Math.max(22,Math.round(A*.8))}px;
                        align-items: start;
                    }
                    .${R} .imageCol {
                        justify-content: flex-start;
                    }
                    .${R} .circle {
                        width: min(100%, ${M}px);
                        height: min(100vw, ${M}px);
                    }
                }

                @media (max-width: 480px) {
                    .${R} {
                        padding-top: ${w+T}px;
                    }
                    .${R} .wrap {
                        padding-top: ${Math.max(18,Math.round(b*.7))}px;
                    }
                    .${R} .actions {
                        gap: 12px;
                    }
                    .${R} .btn {
                        width: 100%;
                        justify-content: center;
                    }
                    .${R} .imageCol {
                        justify-content: center;
                    }

                    .${R} .imageCol {
                        order: -1;
                    }
                }
            `}),r(`div`,{className:`wrap`,children:a(`div`,{className:`grid`,children:[a(`div`,{className:`copy`,children:[r(`h2`,{className:`heading`,style:{..._},children:t}),r(`div`,{className:`body`,style:{...v},children:i.split(/\n\s*\n/g).filter(Boolean).map((e,t)=>r(`p`,{children:e.trim()},t))}),a(`div`,{className:`actions`,role:`group`,"aria-label":`Primary actions`,children:[r(`a`,{className:`btn btnPrimary`,href:z||void 0,"aria-label":s,style:y,children:s}),r(`a`,{className:`btn btnSecondary`,href:B||void 0,"aria-label":l,style:y,children:l})]})]}),r(`div`,{className:`imageCol`,"aria-label":o?.alt||`Image`,children:r(`div`,{className:`circle`,children:r(`img`,{src:o?.src,srcSet:o?.srcSet,alt:o?.alt||``})})})]})})]})}var p=e((()=>{o(),t(),l(),d(f,{heading:{type:u.String,title:`Heading`,defaultValue:`Full-Service Pressure Washers in
Alberta, Canada`,displayTextArea:!0},body:{type:u.String,title:`Body`,defaultValue:`When it comes to pressure washing in Alberta, only one business can be the best — and that's Alberta Pressure Washing! We're a local pressure washing company proudly serving homeowners and businesses across the province, and we're seriously committed to one thing: your satisfaction. The only way to earn that is by transforming grimy surfaces into spotless ones at a fair, affordable price. Good news — that's exactly what we do!

From muddy driveways and grimy siding to dirty decks and oil-stained garage pads, we're always ready to blast away whatever Alberta's harsh seasons throw at your property. Even the toughest buildup — whether it's road salt, mud, or stubborn grime — doesn't stand a chance against us. We won't leave the job until every last bit of debris is gone.

Whether you need us at a residential home or a commercial property, we're here to help. Alberta winters are tough on your surfaces — let us get them looking their best again. Click one of the buttons below to schedule your appointment today!`,displayTextArea:!0},image:{type:u.ResponsiveImage,title:`Image`},primaryLabel:{type:u.String,title:`Primary Label`,defaultValue:`Get a Quote`},primaryLink:{type:u.Link,title:`Primary Link`,defaultValue:``},secondaryLabel:{type:u.String,title:`Secondary Label`,defaultValue:`Call 780-680-3753`},secondaryLink:{type:u.Link,title:`Secondary Link`,defaultValue:`tel:7806803753`},backgroundColor:{type:u.Color,title:`Background`,defaultValue:`#EEEEEE`},textColor:{type:u.Color,title:`Text`,defaultValue:`#000000`},primaryBg:{type:u.Color,title:`Primary BG`,defaultValue:`#5FA1E8`},primaryText:{type:u.Color,title:`Primary Text`,defaultValue:`#FFFFFF`},secondaryBorder:{type:u.Color,title:`Secondary Border`,defaultValue:`#4B4B4B`},secondaryText:{type:u.Color,title:`Secondary Text`,defaultValue:`#1A1A1A`},headingFont:{type:u.Font,title:`Heading Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`44px`,variant:`Bold`,letterSpacing:`-0.04em`,lineHeight:`1.05em`}},bodyFont:{type:u.Font,title:`Body Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`15px`,variant:`Medium`,letterSpacing:`-0.01em`,lineHeight:`1.45em`}},buttonFont:{type:u.Font,title:`Button Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`14px`,variant:`Semibold`,letterSpacing:`-0.01em`,lineHeight:`1em`}},paddingTop:{type:u.Number,title:`Padding Top`,defaultValue:44,min:0,max:200,step:1,unit:`px`},paddingRight:{type:u.Number,title:`Padding Right`,defaultValue:44,min:0,max:200,step:1,unit:`px`},paddingBottom:{type:u.Number,title:`Padding Bottom`,defaultValue:44,min:0,max:200,step:1,unit:`px`},paddingLeft:{type:u.Number,title:`Padding Left`,defaultValue:44,min:0,max:200,step:1,unit:`px`},tabletTopOffset:{type:u.Number,title:`Top Offset (Tablet)`,defaultValue:60,min:0,max:300,step:1,unit:`px`},mobileTopOffset:{type:u.Number,title:`Top Offset (Mobile)`,defaultValue:80,min:0,max:300,step:1,unit:`px`},marginTop:{type:u.Number,title:`Margin Top`,defaultValue:0,min:0,max:200,step:1,unit:`px`},marginRight:{type:u.Number,title:`Margin Right`,defaultValue:0,min:0,max:200,step:1,unit:`px`},marginBottom:{type:u.Number,title:`Margin Bottom`,defaultValue:0,min:0,max:200,step:1,unit:`px`},marginLeft:{type:u.Number,title:`Margin Left`,defaultValue:0,min:0,max:200,step:1,unit:`px`},contentGap:{type:u.Number,title:`Gap`,defaultValue:48,min:12,max:120,step:1,unit:`px`},imageSizeDesktop:{type:u.Number,title:`Image Size`,defaultValue:360,min:160,max:640,step:1,unit:`px`},imageSizeMobile:{type:u.Number,title:`Image Mobile`,defaultValue:320,min:160,max:520,step:1,unit:`px`},imageRadius:{type:u.Number,title:`Image Radius`,defaultValue:999,min:0,max:999,step:1,unit:`px`},buttonRadius:{type:u.Number,title:`Btn Radius`,defaultValue:10,min:0,max:40,step:1,unit:`px`},buttonPaddingY:{type:u.Number,title:`Btn Pad Y`,defaultValue:12,min:6,max:24,step:1,unit:`px`},buttonPaddingX:{type:u.Number,title:`Btn Pad X`,defaultValue:18,min:10,max:40,step:1,unit:`px`}})}));function m(e){let{kicker:t,heading:o,body:c,centerOnDesktop:l,desktopBreakpoint:u,backgroundColor:d,kickerColor:f,textColor:p,paddingX:m,paddingY:h,contentMaxWidth:g,gap:_,headingFont:v,bodyFont:y,kickerFont:b,buttonFont:x,buttonRadius:S,buttonGap:C,primaryLabel:w,primaryHref:T,primaryStyle:E,primaryBg:D,primaryText:O,primaryBorder:k,secondaryLabel:A,secondaryHref:j,secondaryStyle:M,secondaryBg:N,secondaryText:P,secondaryBorder:F,showIllustration:I,illustration:L={src:`https://framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg`,alt:`Illustration`},illustrationWidth:R,illustrationOffsetX:z,illustrationOffsetY:B,illustrationOpacity:V,illustrationMaxHeight:H,style:U}=e,W=n(),G=i(()=>W.replace(/[^a-zA-Z0-9_-]/g,``),[W]),K=i(()=>`sdqh-hero-${G}`,[G]),q=i(()=>`sdqh-ill-${G}`,[G]);U&&U.width,U&&U.height;let J={position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,background:d,display:`flex`,alignItems:`stretch`,justifyContent:`flex-start`,padding:`${h}px ${m}px`,boxSizing:`border-box`},Y={position:`relative`,zIndex:2,flex:`1 1 auto`,maxWidth:g,display:`flex`,flexDirection:`column`,justifyContent:`center`,gap:_,paddingRight:24,boxSizing:`border-box`},X={position:`relative`,display:`flex`,flexDirection:`row`,gap:C,marginTop:18,alignItems:`center`,flexWrap:`wrap`},Z={position:`relative`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,height:52,padding:`0 34px`,borderRadius:S,textDecoration:`none`,outline:`none`,boxSizing:`border-box`,userSelect:`none`,WebkitTapHighlightColor:`transparent`,whiteSpace:`nowrap`,...x};function Q(e,t,n,r){return e===`outline`?{background:`transparent`,color:n,border:`2px solid ${r}`}:{background:t,color:n,border:`2px solid ${r}`}}let $={...Z,...Q(E,D,O,k)},ee={...Z,...Q(M,N,P,F)},te={position:`absolute`,right:z,bottom:B,top:H?0:`auto`,height:H?`100%`:`120%`,width:R,maxWidth:`55%`,zIndex:1,display:I?`block`:`none`,pointerEvents:`none`,opacity:V},ne={position:`absolute`,right:0,bottom:0,width:`100%`,height:`100%`,maxHeight:`100%`,maxWidth:`100%`,objectFit:`contain`,objectPosition:`right bottom`};return a(`section`,{style:{...J,...U},className:K,"aria-label":`Hero`,children:[r(`style`,{children:`@media (min-width: ${u}px) {
  .${K} {
    ${l?`justify-content: center; align-items: center;`:``}
  }
  .${q} {
    ${l?`top: 50% !important; bottom: auto !important; transform: translateY(-50%);`:``}
  }
}`}),a(`div`,{style:Y,children:[r(`div`,{style:{...b,color:f,letterSpacing:`0.01em`},children:t}),r(`div`,{style:{...v,color:p,margin:0},children:o}),r(`div`,{style:{...y,color:p,maxWidth:560,opacity:.98},children:c}),a(`div`,{style:X,"aria-label":`Actions`,children:[r(s.a,{href:T,style:$,whileHover:{y:-1},whileTap:{scale:.99},"aria-label":w,children:w}),r(s.a,{href:j,style:ee,whileHover:{y:-1},whileTap:{scale:.99},"aria-label":A,children:A})]})]}),r(`div`,{style:te,className:q,"aria-hidden":`true`,children:r(`img`,{...L,alt:L.alt??``,style:ne})})]})}var h=e((()=>{o(),t(),l(),c(),d(m,{centerOnDesktop:{type:u.Boolean,title:`Center Desktop`,defaultValue:!0,enabledTitle:`Center`,disabledTitle:`Default`},desktopBreakpoint:{type:u.Number,title:`Desktop ≥`,defaultValue:992,min:0,max:2e3,step:1,unit:`px`},kicker:{type:u.String,title:`Kicker`,defaultValue:`Fast & Free`},heading:{type:u.String,title:`Heading`,defaultValue:`Get A Same Day Quote`},body:{type:u.String,title:`Body`,defaultValue:`Kickstart your journey to a cleaner, more attractive property in St.
Tammany Parish, LA. Get in touch now!`,displayTextArea:!0},backgroundColor:{type:u.Color,title:`Background`,defaultValue:`#00528A`},kickerColor:{type:u.Color,title:`Kicker`,defaultValue:`#63A7D8`},textColor:{type:u.Color,title:`Text`,defaultValue:`#FFFFFF`},paddingX:{type:u.Number,title:`Pad X`,defaultValue:72,min:0,max:200,step:1,unit:`px`},paddingY:{type:u.Number,title:`Pad Y`,defaultValue:46,min:0,max:160,step:1,unit:`px`},contentMaxWidth:{type:u.Number,title:`Content W`,defaultValue:640,min:320,max:1e3,step:1,unit:`px`},gap:{type:u.Number,title:`Text Gap`,defaultValue:14,min:0,max:40,step:1,unit:`px`},kickerFont:{type:u.Font,title:`Kicker Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`20px`,variant:`Semibold`,letterSpacing:`-0.01em`,lineHeight:`1.1em`}},headingFont:{type:u.Font,title:`Heading Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`54px`,variant:`Bold`,letterSpacing:`-0.03em`,lineHeight:`1em`}},bodyFont:{type:u.Font,title:`Body Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`16px`,variant:`Medium`,letterSpacing:`-0.01em`,lineHeight:`1.45em`}},buttonFont:{type:u.Font,title:`Button Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`16px`,variant:`Semibold`,letterSpacing:`-0.01em`,lineHeight:`1em`}},buttonRadius:{type:u.Number,title:`Btn Radius`,defaultValue:999,min:0,max:999,step:1,unit:`px`},buttonGap:{type:u.Number,title:`Btn Gap`,defaultValue:22,min:0,max:60,step:1,unit:`px`},primaryLabel:{type:u.String,title:`Primary`,defaultValue:`Get a Quote`},primaryHref:{type:u.Link,title:`Primary Link`,defaultValue:`#`},primaryStyle:{type:u.Enum,title:`Primary Style`,defaultValue:`filled`,options:[`filled`,`outline`],optionTitles:[`Filled`,`Outline`],displaySegmentedControl:!0},primaryBg:{type:u.Color,title:`Primary BG`,defaultValue:`#7FB4DE`},primaryText:{type:u.Color,title:`Primary Text`,defaultValue:`#FFFFFF`},primaryBorder:{type:u.Color,title:`Primary Border`,defaultValue:`#7FB4DE`},secondaryLabel:{type:u.String,title:`Secondary`,defaultValue:`Call (985) 200-9595`},secondaryHref:{type:u.Link,title:`Secondary Link`,defaultValue:`tel:+19852009595`},secondaryStyle:{type:u.Enum,title:`Secondary Style`,defaultValue:`outline`,options:[`filled`,`outline`],optionTitles:[`Filled`,`Outline`],displaySegmentedControl:!0},secondaryBg:{type:u.Color,title:`Secondary BG`,defaultValue:`transparent`},secondaryText:{type:u.Color,title:`Secondary Text`,defaultValue:`#FFFFFF`},secondaryBorder:{type:u.Color,title:`Secondary Border`,defaultValue:`#FFFFFF`},showIllustration:{type:u.Boolean,title:`Illustration`,defaultValue:!0,enabledTitle:`Show`,disabledTitle:`Hide`},illustration:{type:u.ResponsiveImage,title:`Image`,hidden:({showIllustration:e})=>!e},illustrationWidth:{type:u.Number,title:`Img Width`,defaultValue:520,min:200,max:900,step:1,unit:`px`,hidden:({showIllustration:e})=>!e},illustrationOffsetX:{type:u.Number,title:`Img X`,defaultValue:30,min:-400,max:400,step:1,unit:`px`,hidden:({showIllustration:e})=>!e},illustrationOffsetY:{type:u.Number,title:`Img Y`,defaultValue:-10,min:-300,max:300,step:1,unit:`px`,hidden:({showIllustration:e})=>!e},illustrationOpacity:{type:u.Number,title:`Img Opacity`,defaultValue:1,min:0,max:1,step:.01,hidden:({showIllustration:e})=>!e},illustrationMaxHeight:{type:u.Boolean,title:`Img Max H`,defaultValue:!1,enabledTitle:`100%`,disabledTitle:`120%`,hidden:({showIllustration:e})=>!e}})}));export{p as i,h as n,f as r,m as t};
//# sourceMappingURL=SameDayQuoteHero.D7GqfSV7.mjs.map