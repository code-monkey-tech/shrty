(function(){"use strict";var r={4452:function(r,n,t){var e=t(4853),C=t(3682),o=t(3274),s=t.p+"img/cut.4ace5b50.png";const c=r=>((0,C.dD)("data-v-20bf00c4"),r=r(),(0,C.Cn)(),r),l={class:"main"},a={class:"header"},i={class:"header__scheme-switcher"},u={for:"checkbox",class:"custom-label"},h=c((()=>(0,C._)("span",null,"🌙",-1))),g=c((()=>(0,C._)("span",null,"☀️",-1))),d=c((()=>(0,C._)("div",{class:"leftContent"},[(0,C._)("span",{class:"leftContent__one"},"Shorten"),(0,C._)("span",{class:"leftContent__two"},"your"),(0,C._)("span",{class:"leftContent__three"},"path.")],-1))),p={class:"content"},f={class:"content__qr qr"},m=c((()=>(0,C._)("img",{class:"content__cut",src:s,alt:"cut"},null,-1)));function _(r,n,t,s,c,_){const v=(0,C.up)("ShortyLogoSVG"),b=(0,C.up)("qrcode-generate");return(0,C.wg)(),(0,C.iD)("div",l,[(0,C._)("div",a,[(0,C.Wm)(v,{class:"header__logo"}),(0,C._)("div",i,[(0,C._)("input",{id:"checkbox",type:"checkbox",class:"custom-checkbox",onChange:n[0]||(n[0]=(...n)=>r.toggleScheme&&r.toggleScheme(...n))},null,32),(0,C._)("label",u,[h,g,(0,C._)("div",{class:(0,o.C_)(["swich-toggle",{"switch-toggle-checked":"dark"===r.colorScheme}])},null,2)])])]),d,(0,C._)("div",p,[(0,C.wy)((0,C._)("input",{"onUpdate:modelValue":n[1]||(n[1]=n=>r.longUrl=n),class:"input content__long",type:"text",placeholder:"Your link",onKeyup:n[2]||(n[2]=(0,e.D2)((n=>r.longUrl.length&&r.sendLongUrl()),["enter"]))},null,544),[[e.nr,r.longUrl,void 0,{trim:!0}]]),(0,C.wy)((0,C._)("input",{"onUpdate:modelValue":n[3]||(n[3]=n=>r.$store.getters.getCorrectShortUrl=n),class:"input content__short",type:"text",placeholder:"https://shorty.com/sGn2",disabled:""},null,512),[[e.nr,r.$store.getters.getCorrectShortUrl]]),(0,C._)("button",{class:(0,o.C_)([{"btn-disabled":!r.$store.getters.getCorrectShortUrl.length,"btn-active":r.$store.getters.getCorrectShortUrl.length},"btn content__copy"]),onClick:n[4]||(n[4]=n=>r.$store.getters.getCorrectShortUrl&&r.copyURL(r.$store.getters.getCorrectShortUrl))}," Copy URL ",2),(0,C._)("div",f,[(0,C.Wm)(b,{class:(0,o.C_)([{"qr__img-disabled":!r.$store.getters.getCorrectShortUrl.length},"qr__img"])},null,8,["class"]),(0,C._)("button",{class:(0,o.C_)([{"btn-disabled":!r.$store.getters.getCorrectShortUrl.length,"btn-active":r.$store.getters.getCorrectShortUrl.length},"btn qr__btn"])}," Dowload QR ",2)]),m,(0,C._)("button",{class:(0,o.C_)([{"btn-disabled":!r.longUrl.length,"btn-active":r.longUrl.length},"btn content__btn"]),onClick:n[5]||(n[5]=n=>r.longUrl.length&&r.sendLongUrl())}," Shorten URL ",2)])])}var v=t(6510),b=t.n(v);const y="https://e7ast1c-shrty.herokuapp.com",S=async r=>{const n=`${y}/shorten`,t=await b().post(n,r);return t},w=async r=>{const n=`${y}/expand`,t=await b().get(n,{params:{hash:r}});return t.data},U={width:"69",height:"49",viewBox:"0 0 69 49",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k=(0,C.uE)('<path d="M16.72 31.92C15.6307 31.92\r\n    14.4653 31.768 13.224 31.464C11.9827 31.1853 10.7667 30.7927 9.576\r\n    30.286C8.41067 29.754 7.35933 29.1587 6.422 28.5C5.51 27.8413 4.826 27.132\r\n    4.37 26.372C4.16733 26.372 3.93933 26.3847 3.686 26.41C3.43267 26.4353\r\n    3.16667 26.448 2.888 26.448C2.584 26.448 2.204 26.3973 1.748 26.296C1.292\r\n    26.1947 0.886667 26.0173 0.532 25.764C0.177333 25.5107 0 25.1687 0 24.738C0\r\n    24.5353 0.139333 24.358 0.418 24.206C0.722 24.054 1.27933 23.978 2.09\r\n    23.978C3.66067 23.978 4.75 24.4593 5.358 25.422C6.194 25.5233 7.08067\r\n    25.5993 8.018 25.65C8.95533 25.7007 9.918 25.726 10.906 25.726C11.9193\r\n    25.726 12.9327 25.7007 13.946 25.65C14.9847 25.5993 16.0107 25.5107 17.024\r\n    25.384C16.4667 24.4973 15.8333 23.6107 15.124 22.724C14.44 21.8373 13.8953\r\n    21.1153 13.49 20.558C12.5527 19.2913 11.628 17.9867 10.716 16.644C9.804\r\n    15.276 8.93 13.7307 8.094 12.008C7.76467 11.3493 7.6 10.678 7.6 9.994C7.6\r\n    8.98067 7.91667 8.03067 8.55 7.144C9.18333 6.232 9.98133 5.396 10.944\r\n    4.636C11.9067 3.876 12.92 3.21733 13.984 2.66C15.0733 2.07733 16.0487 1.596\r\n    16.91 1.216C17.822 0.836 18.7467 0.544667 19.684 0.342C20.6213 0.114 21.5207\r\n    0 22.382 0C22.8887 0 23.37 0.0380003 23.826 0.114001C24.4593 0.215334\r\n    25.0673 0.557335 25.65 1.14C26.258 1.69733 26.7647 2.36867 27.17\r\n    3.154C27.5753 3.914 27.778 4.674 27.778 5.434C27.778 6.14333 27.6007 6.96667\r\n    27.246 7.904C26.9167 8.816 26.486 9.75333 25.954 10.716C25.422 11.6533\r\n    24.852 12.54 24.244 13.376C23.636 14.1867 23.066 14.8453 22.534\r\n    15.352C22.0273 15.8587 21.622 16.112 21.318 16.112C20.8873 16.112 20.4947\r\n    15.884 20.14 15.428C19.8107 14.972 19.646 14.6173 19.646 14.364C19.646\r\n    14.212 19.684 14.1233 19.76 14.098C20.444 13.5913 21.166 12.9073 21.926\r\n    12.046C22.686 11.1847 23.3827 10.26 24.016 9.272C24.6747 8.25867 25.2067\r\n    7.27067 25.612 6.308C26.0427 5.32 26.258 4.47133 26.258 3.762C26.258 2.95133\r\n    25.954 2.40667 25.346 2.128C24.7633 1.824 24.0287 1.672 23.142 1.672C22.306\r\n    1.672 21.4193 1.81133 20.482 2.09C19.5447 2.34333 18.7213 2.64733 18.012\r\n    3.002C15.7067 4.142 13.9333 5.244 12.692 6.308C11.4507 7.34667 10.5893 8.322\r\n    10.108 9.234C9.652 10.146 9.424 10.982 9.424 11.742C9.424 12.5273 9.804\r\n    13.5787 10.564 14.896C11.324 16.188 12.616 17.936 14.44 20.14C15.124 20.976\r\n    15.8587 21.8247 16.644 22.686C17.4547 23.522 18.1893 24.3327 18.848\r\n    25.118C20.0387 24.9153 21.1407 24.662 22.154 24.358C23.1927 24.054 24.1047\r\n    23.6993 24.89 23.294C24.9153 23.2687 24.9533 23.256 25.004 23.256C25.08\r\n    23.256 25.118 23.294 25.118 23.37C25.118 23.5727 25.0293 23.7247 24.852\r\n    23.826C24.2947 24.2313 23.5473 24.5987 22.61 24.928C21.6727 25.2573 20.6087\r\n    25.5487 19.418 25.802C19.9247 26.41 20.33 26.9927 20.634 27.55C20.938 28.082\r\n    21.09 28.5633 21.09 28.994C21.09 30.0327 20.672 30.78 19.836 31.236C19.0253\r\n    31.692 17.9867 31.92 16.72 31.92ZM14.858 30.59C15.846 30.59 16.6567 30.4127\r\n    17.29 30.058C17.9487 29.7033 18.278 29.1587 18.278 28.424C18.278 28.12\r\n    18.202 27.778 18.05 27.398C17.898 26.9927 17.6953 26.5747 17.442\r\n    26.144C15.086 26.4987 12.654 26.676 10.146 26.676C8.67667 26.676 7.27067\r\n    26.6 5.928 26.448C6.536 27.2587 7.334 27.9807 8.322 28.614C9.33533 29.2473\r\n    10.412 29.7413 11.552 30.096C12.7173 30.4253 13.8193 30.59 14.858 30.59Z" fill="#E60058"></path><path d="M28.7746 32.072C28.3439 32.072\r\n    27.9893 31.806 27.7106 31.274C27.4573 30.742 27.2673 30.0707 27.1406\r\n    29.26C27.0139 28.424 26.9253 27.5373 26.8746 26.6C26.8239 25.6373 26.7986\r\n    24.738 26.7986 23.902C26.7986 22.2047 26.8619 20.4567 26.9886 18.658C27.1406\r\n    16.8593 27.3306 15.124 27.5586 13.452C27.7866 11.7547 28.0273 10.2093\r\n    28.2806 8.816C28.5339 7.42267 28.7619 6.25733 28.9646 5.32C29.1926 4.35733\r\n    29.3699 3.724 29.4966 3.42C29.6739 2.98933 29.8133 2.622 29.9146\r\n    2.318C30.0413 2.014 30.2313 1.862 30.4846 1.862C30.8899 1.862 31.2826\r\n    2.02667 31.6626 2.356C32.0679 2.68533 32.2706 2.98933 32.2706\r\n    3.268V3.344C32.4226 3.14133 32.6379 3.04 32.9166 3.04C33.3219 3.04 33.6386\r\n    3.24267 33.8666 3.648C34.1199 4.05333 34.2973 4.522 34.3986 5.054C34.5253\r\n    5.56067 34.5886 5.97867 34.5886 6.308C34.5886 7.296 34.3859 8.398 33.9806\r\n    9.614C33.5753 10.8047 33.0559 12.0207 32.4226 13.262C31.7893 14.478 31.1179\r\n    15.656 30.4086 16.796C29.6993 17.9107 29.0406 18.8987 28.4326 19.76C28.3313\r\n    20.7733 28.2426 21.7993 28.1666 22.838C28.0906 23.8767 28.0526 24.9153\r\n    28.0526 25.954C28.0526 26.5113 28.0653 27.0433 28.0906 27.55C28.1413 28.0567\r\n    28.1919 28.538 28.2426 28.994C28.3693 28.2087 28.5466 27.322 28.7746\r\n    26.334C29.0026 25.346 29.2433 24.3707 29.4966 23.408C29.7499 22.42 29.9906\r\n    21.5333 30.2186 20.748C30.4719 19.9627 30.6746 19.3927 30.8266\r\n    19.038C31.0799 18.43 31.4093 17.9993 31.8146 17.746C32.2453 17.4927 32.6506\r\n    17.366 33.0306 17.366C33.1826 17.366 33.3093 17.5813 33.4106 18.012C33.5119\r\n    18.4427 33.5879 18.9873 33.6386 19.646C33.7146 20.3047 33.7779 20.9887\r\n    33.8286 21.698C33.8793 22.382 33.9173 22.9773 33.9426 23.484C33.9933 24.396\r\n    34.1073 25.042 34.2846 25.422C34.4619 25.802 34.6519 26.03 34.8546\r\n    26.106C35.0573 26.182 35.2219 26.2327 35.3486 26.258C35.5766 26.258 35.8299\r\n    26.0553 36.1086 25.65C36.4126 25.2193 36.7039 24.7253 36.9826 24.168C37.2866\r\n    23.6107 37.5653 23.1293 37.8186 22.724C38.0719 22.2933 38.2746 22.078\r\n    38.4266 22.078C38.5026 22.078 38.5406 22.1413 38.5406 22.268C38.5406 22.3693\r\n    38.5026 22.534 38.4266 22.762C37.6159 24.6873 36.9066 26.1313 36.2986\r\n    27.094C35.6906 28.0567 35.0446 28.538 34.3606 28.538C33.8033 28.538 33.3979\r\n    28.2973 33.1446 27.816C32.7646 27.1573 32.4986 26.4353 32.3466 25.65C32.1946\r\n    24.8393 32.0679 24.016 31.9666 23.18C31.8906 22.344 31.7513 21.5587 31.5486\r\n    20.824C31.5233 20.672 31.4599 20.596 31.3586 20.596C31.2826 20.596 31.2066\r\n    20.672 31.1306 20.824C31.0799 20.976 31.0039 21.166 30.9026 21.394C30.8266\r\n    21.5713 30.6746 22.04 30.4466 22.8C30.2439 23.5347 30.0159 24.434 29.7626\r\n    25.498C29.5093 26.5367 29.2939 27.6387 29.1166 28.804C28.9393 29.944 28.8506\r\n    31.008 28.8506 31.996C28.8506 32.0467 28.8253 32.072 28.7746 32.072ZM28.6226\r\n    18.392C29.3826 17.1507 30.1299 15.8333 30.8646 14.44C31.6246 13.0213 32.2579\r\n    11.628 32.7646 10.26C33.2713 8.892 33.5246 7.65067 33.5246 6.536C33.5246\r\n    5.95333 33.4486 5.434 33.2966 4.978C33.1446 4.49667 32.8659 4.09133 32.4606\r\n    3.762C32.4353 3.71133 32.3973 3.67333 32.3466 3.648C32.2959 3.62267 32.2453\r\n    3.59733 32.1946 3.572C31.5106 5.59867 30.8393 7.89133 30.1806 10.45C29.5219\r\n    12.9833 29.0026 15.6307 28.6226 18.392Z" fill="#E60058"></path><path d="M44.3172 28.462C43.3799 28.462\r\n    42.7465 27.9427 42.4172 26.904C42.0879 25.84 41.9232 24.5353 41.9232\r\n    22.99C41.9232 22.154 41.9485 21.3433 41.9992 20.558C42.0499 19.7473 42.0879\r\n    19.076 42.1132 18.544C41.7079 18.4933 41.3152 18.4173 40.9352 18.316C40.5805\r\n    18.1893 40.3019 18.0627 40.0992 17.936C40.0739 18.1133 39.9725 18.4807\r\n    39.7952 19.038C39.6179 19.57 39.4025 20.1907 39.1492 20.9C38.9212 21.6093\r\n    38.6679 22.306 38.3892 22.99C38.1105 23.674 37.8445 24.244 37.5912\r\n    24.7C37.3379 25.1307 37.1099 25.346 36.9072 25.346C36.8059 25.346 36.7552\r\n    25.27 36.7552 25.118C36.7552 24.9153 36.8439 24.6367 37.0212 24.282C37.5279\r\n    23.2433 37.9839 22.1793 38.3892 21.09C38.7945 20.0007 39.1619 18.8733\r\n    39.4912 17.708C39.2379 17.6067 39.0479 17.4293 38.9212 17.176C38.8199\r\n    16.8973 38.7692 16.5933 38.7692 16.264C38.7692 15.352 38.8959 14.6047\r\n    39.1492 14.022C39.4279 13.4393 39.7319 13.0087 40.0612 12.73C40.3905 12.426\r\n    40.6439 12.274 40.8212 12.274C41.1252 12.274 41.2772 12.5273 41.2772\r\n    13.034C41.2772 13.2873 41.2139 13.68 41.0872 14.212C40.9605 14.7187 40.8085\r\n    15.2507 40.6312 15.808C40.4539 16.34 40.3019 16.7707 40.1752 17.1C40.1752\r\n    17.1 40.2512 17.1507 40.4032 17.252C40.5552 17.3533 40.7199 17.404 40.8972\r\n    17.404C41.1505 17.404 41.3912 17.252 41.6192 16.948C41.8725 16.6187 42.1639\r\n    16.302 42.4932 15.998C42.8479 15.6687 43.2912 15.504 43.8232 15.504C44.1019\r\n    15.504 44.3425 15.542 44.5452 15.618C44.7479 15.6687 44.8492 15.77 44.8492\r\n    15.922V16.036C44.5959 16.6693 44.4059 17.5053 44.2792 18.544C44.1525 19.5573\r\n    44.0892 20.5833 44.0892 21.622C44.0892 22.534 44.1399 23.3953 44.2412\r\n    24.206C44.3425 24.9913 44.4945 25.6247 44.6972 26.106C44.9252 26.5873\r\n    45.1912 26.828 45.4952 26.828C45.7992 26.828 46.0905 26.6633 46.3692\r\n    26.334C46.6479 26.0047 46.8885 25.65 47.0912 25.27C47.3192 24.89 47.4712\r\n    24.6113 47.5472 24.434C48.0792 23.446 48.4085 22.8127 48.5352 22.534C48.6619\r\n    22.23 48.8265 22.078 49.0292 22.078C49.1052 22.078 49.1432 22.1287 49.1432\r\n    22.23C49.1432 22.2807 49.1179 22.4073 49.0672 22.61C48.7632 23.446 48.3832\r\n    24.32 47.9272 25.232C47.4965 26.1187 46.9772 26.8787 46.3692 27.512C45.7612\r\n    28.1453 45.0772 28.462 44.3172 28.462Z" fill="#E60058"></path><path d="M52.5727 31.046C51.686 31.046\r\n    50.964 30.7673 50.4067 30.21C49.8494 29.6273 49.4187 28.88 49.1147\r\n    27.968C48.836 27.056 48.646 26.0807 48.5447 25.042C48.4434 23.978 48.3927\r\n    22.9773 48.3927 22.04C48.3927 21.4827 48.4054 20.976 48.4307 20.52C48.456\r\n    20.0387 48.4814 19.6333 48.5067 19.304C48.5574 18.3413 48.646 17.29 48.7727\r\n    16.15C48.8994 14.9847 49.0514 13.794 49.2287 12.578C47.9114 12.7807 46.708\r\n    12.9453 45.6187 13.072C44.504 13.1987 43.5794 13.262 42.8447 13.262C42.7434\r\n    13.262 42.5914 13.1353 42.3887 12.882C42.186 12.6287 42.034 12.3627 41.9327\r\n    12.084C41.806 11.8053 41.7934 11.6787 41.8947 11.704C42.148 11.7293 42.3887\r\n    11.7547 42.6167 11.78C42.8447 11.78 43.0854 11.78 43.3387 11.78C44.0987\r\n    11.78 44.9474 11.7293 45.8847 11.628C46.7967 11.5267 47.9747 11.4 49.4187\r\n    11.248C49.6214 9.98133 49.8367 8.72733 50.0647 7.486C50.318 6.24467 50.5714\r\n    5.06667 50.8247 3.952C50.9514 3.44533 51.0654 3.04 51.1667 2.736C51.2934\r\n    2.432 51.5214 2.30533 51.8507 2.356C52.1547 2.40667 52.4714 2.52067 52.8007\r\n    2.698C53.13 2.87533 53.358 3.078 53.4847 3.306C53.9914 3.78733 54.3587\r\n    4.39533 54.5867 5.13C54.8147 5.83933 54.9287 6.63733 54.9287 7.524C54.9287\r\n    8.46133 54.8147 9.48733 54.5867 10.602C55.98 10.3993 57.4114 10.1587 58.8807\r\n    9.88C60.3754 9.576 61.8194 9.272 63.2127 8.968C64.6314 8.63867 65.9107\r\n    8.34733 67.0507 8.094C67.228 8.04333 67.2534 8.06867 67.1267 8.17C67 8.246\r\n    66.8227 8.33467 66.5947 8.436C66.3667 8.53733 66.1767 8.61333 66.0247\r\n    8.664C64.4287 9.22133 62.6047 9.766 60.5527 10.298C58.5007 10.83 56.436\r\n    11.2987 54.3587 11.704C53.9534 13.4013 53.3834 15.162 52.6487 16.986C51.914\r\n    18.7847 51.1414 20.52 50.3307 22.192C50.3307 22.4453 50.318 22.6987 50.2927\r\n    22.952C50.2927 23.18 50.2927 23.4207 50.2927 23.674C50.2927 24.9153 50.356\r\n    26.03 50.4827 27.018C50.6347 27.9807 50.8754 28.766 51.2047 29.374C51.4327\r\n    29.8047 51.686 30.1087 51.9647 30.286C52.2687 30.438 52.56 30.514 52.8387\r\n    30.514C53.1174 30.514 53.3834 30.4633 53.6367 30.362C53.89 30.2607 54.08\r\n    30.1847 54.2067 30.134C54.4854 30.0073 54.6754 29.9567 54.7767 29.982C54.878\r\n    30.0073 54.8654 30.0833 54.7387 30.21C54.6627 30.3113 54.4347 30.476 54.0547\r\n    30.704C53.6747 30.932 53.1807 31.046 52.5727 31.046ZM51.8507 10.982L52.3827\r\n    10.906L53.7127 10.754C53.8394 10.1713 53.928 9.614 53.9787 9.082C54.0547\r\n    8.55 54.0927 8.04333 54.0927 7.562C54.0927 6.24467 53.852 5.19333 53.3707\r\n    4.408C53.092 5.42133 52.826 6.48533 52.5727 7.6C52.3194 8.71467 52.0787\r\n    9.842 51.8507 10.982ZM50.4447 20.216C51.0527 18.8227 51.6227 17.4167 52.1547\r\n    15.998C52.6867 14.5793 53.1174 13.2113 53.4467 11.894C53.1174 11.9447\r\n    52.8007 11.9953 52.4967 12.046C52.1927 12.0967 51.8887 12.1473 51.5847\r\n    12.198C51.3314 13.566 51.1034 14.934 50.9007 16.302C50.7234 17.6447 50.5714\r\n    18.9493 50.4447 20.216Z" fill="#E60058"></path><path d="M56.4781 48.26C56.1994 48.26\r\n    56.0601 48.146 56.0601 47.918C56.0601 47.766 56.1108 47.6267 56.2121\r\n    47.5C56.5668 46.7147 56.9848 45.714 57.4661 44.498C57.9728 43.3073 58.5048\r\n    41.9773 59.0621 40.508C59.6194 39.0387 60.1641 37.506 60.6961 35.91C61.2281\r\n    34.314 61.7094 32.7307 62.1401 31.16C61.4561 31.7173 60.7594 32.3 60.0501\r\n    32.908C59.3408 33.516 58.6568 34.2507 57.9981 35.112C57.1621 36.1507 56.5161\r\n    37.3793 56.0601 38.798C55.6294 40.242 55.4141 41.572 55.4141 42.788C55.4141\r\n    44.2573 55.7181 45.3593 56.3261 46.094C56.4021 46.17 56.4401 46.2207 56.4401\r\n    46.246C56.4401 46.246 56.4274 46.246 56.4021 46.246C56.4021 46.2713 56.3894\r\n    46.284 56.3641 46.284C56.2628 46.284 56.1361 46.246 55.9841 46.17C55.8574\r\n    46.094 55.7308 45.98 55.6041 45.828C55.0974 45.296 54.7301 44.65 54.5021\r\n    43.89C54.2488 43.1553 54.1221 42.3573 54.1221 41.496C54.1221 40.508 54.3121\r\n    39.5073 54.6921 38.494C55.0721 37.4807 55.6294 36.5307 56.3641\r\n    35.644C57.4028 34.3773 58.4541 33.2753 59.5181 32.338C60.5821 31.4007\r\n    61.5828 30.514 62.5201 29.678C62.7734 28.69 62.9888 27.7273 63.1661\r\n    26.79C63.3434 25.8527 63.4701 24.966 63.5461 24.13C63.6221 23.218 63.6728\r\n    22.3947 63.6981 21.66C63.7234 20.9 63.7361 20.216 63.7361 19.608C63.7361\r\n    18.924 63.6981 18.3413 63.6221 17.86C63.2168 18.4173 62.8114 19.1393 62.4061\r\n    20.026C62.0008 20.9127 61.6208 21.8373 61.2661 22.8C60.9368 23.7627 60.6708\r\n    24.6747 60.4681 25.536C60.2654 26.372 60.1641 27.0307 60.1641 27.512C60.1641\r\n    27.6133 60.1641 27.702 60.1641 27.778C60.1894 27.854 60.2021 27.93 60.2021\r\n    28.006C60.2021 28.158 60.0248 28.234 59.6701 28.234C58.8848 28.234 58.3274\r\n    28.0947 57.9981 27.816C57.6688 27.5373 57.5041 27.1193 57.5041\r\n    26.562C57.5041 26.03 57.5294 25.3587 57.5801 24.548C57.6308 23.712 57.6688\r\n    22.838 57.6941 21.926C57.7448 20.9887 57.7701 20.102 57.7701 19.266C57.7701\r\n    17.822 57.6814 16.796 57.5041 16.188C57.3268 15.58 57.0228 15.276 56.5921\r\n    15.276C56.3894 15.276 56.1488 15.3647 55.8701 15.542C55.5914 15.694 55.2748\r\n    15.77 54.9201 15.77C54.7934 15.77 54.7048 15.732 54.6541 15.656C54.6794\r\n    15.7067 54.7934 15.6307 54.9961 15.428C55.2241 15.2253 55.5914 15.01 56.0981\r\n    14.782C56.6301 14.554 57.3521 14.44 58.2641 14.44C58.7201 14.44 59.0621\r\n    14.5033 59.2901 14.63C59.5434 14.7313 59.7081 15.0353 59.7841 15.542C59.8601\r\n    16.0487 59.8981 16.8973 59.8981 18.088C59.8981 18.9747 59.8728 19.9627\r\n    59.8221 21.052C59.7714 22.116 59.7081 23.1293 59.6321 24.092C59.5561 25.0547\r\n    59.4674 25.8527 59.3661 26.486C59.5181 26.0047 59.7334 25.3713 60.0121\r\n    24.586C60.2908 23.8007 60.5948 22.952 60.9241 22.04C61.2788 21.1027 61.6081\r\n    20.2033 61.9121 19.342C62.2414 18.4553 62.5328 17.6953 62.7861\r\n    17.062C63.0394 16.4287 63.2041 15.998 63.2801 15.77V15.732C63.2801 15.7067\r\n    63.2801 15.694 63.2801 15.694C63.3054 15.694 63.3181 15.6813 63.3181\r\n    15.656V15.694C63.3941 15.618 63.5461 15.58 63.7741 15.58C64.3061 15.58\r\n    64.6734 15.8207 64.8761 16.302C65.1041 16.7833 65.2434 17.3787 65.2941\r\n    18.088C65.3448 18.7973 65.3701 19.494 65.3701 20.178C65.3701 21.3433 65.2941\r\n    22.572 65.1421 23.864C65.0154 25.1307 64.8508 26.4227 64.6481 27.74C65.1548\r\n    27.2333 65.6234 26.7013 66.0541 26.144C66.4848 25.5867 66.8521 24.9913\r\n    67.1561 24.358C67.2828 24.054 67.4474 23.8007 67.6501 23.598C67.8528 23.3953\r\n    68.0048 23.294 68.1061 23.294C68.1568 23.294 68.1821 23.3447 68.1821\r\n    23.446C68.1821 23.6233 68.0934 23.902 67.9161 24.282C67.4348 25.4473 66.8774\r\n    26.4353 66.2441 27.246C65.6361 28.0313 65.0028 28.7407 64.3441\r\n    29.374C63.9388 31.3247 63.4828 33.2247 62.9761 35.074C62.4694 36.9233\r\n    61.9628 38.5953 61.4561 40.09C60.9494 41.61 60.5061 42.8513 60.1261\r\n    43.814C59.7461 44.802 59.4928 45.41 59.3661 45.638C58.8594 46.5753 58.3274\r\n    47.2467 57.7701 47.652C57.2381 48.0573 56.8074 48.26 56.4781 48.26Z" fill="#E60058"></path>',5),M=[k];function x(r,n){return(0,C.wg)(),(0,C.iD)("svg",U,M)}var Z=t(472);const $={},L=(0,Z.Z)($,[["render",x]]);var O=L,P=t(1899);function j(r,n,t,e,o,s){const c=(0,C.up)("qrcode-vue");return(0,C.wg)(),(0,C.j4)(c,{value:r.$store.getters.getCorrectShortUrl,size:r.size,level:"H"},null,8,["value","size"])}var V=t(9617),q=t.n(V),E=(0,C.aZ)({name:"QrcodeGenerate",components:{QrcodeVue:q()},data(){return{size:140}}});const G=(0,Z.Z)(E,[["render",j]]);var R=G,T=(0,C.aZ)({name:"App",components:{ShortyLogoSVG:O,QrcodeGenerate:R},setup(){const r=(0,P.pm)();return{toast:r}},data(){return{longUrl:"",colorScheme:"light"}},computed:{hashParam(){const r=window.location.pathname.slice(1);return r}},async created(){if(this.hashParam){const{url:r}=await w(this.hashParam);r&&(window.location.href=r)}},async mounted(){const r=this.getSettings()||this.getMediaPrefers();this.setSettings(r)},methods:{async copyURL(r){try{await navigator.clipboard.writeText(r),this.toast.success("You copied link! Use it")}catch(n){this.toast.error("So sorry, cannot copy!")}},async sendLongUrl(){const r={url:this.longUrl};await this.$store.dispatch("getShortUrl",r,{root:!0})},toggleScheme(){const r=localStorage.getItem("user-scheme");"light"===r?this.setSettings("dark"):this.setSettings("light")},getSettings(){return localStorage.getItem("user-scheme")},setSettings(r){localStorage.setItem("user-scheme",r),this.colorScheme=r,document.documentElement.className=r},getMediaPrefers(){const r=window.matchMedia("(prefers-color-sheme: dark)").matches;return r?"dark":"light"}}});const D=(0,Z.Z)(T,[["render",_],["__scopeId","data-v-20bf00c4"]]);var z=D,I=(t(2604),{state:{shortUrl:""},mutations:{setLongUrl(r,n){r.shortUrl=n}},getters:{getCorrectShortUrl(r){const n=window.location.origin,t=r.shortUrl?`${n}/${r.shortUrl}`:"";return t}},actions:{async getShortUrl({commit:r},n){const t=(0,P.pm)();try{const e=await S(n);if(e.status>=200&&e.status<=299){const{data:n}=e;t.success("Good Request!"),r("setLongUrl",n.url)}}catch(e){t.error(e.message)}}}}),Q=t(295),W=(0,Q.MT)({modules:{urlModule:I}});(0,e.ri)(z).use(W).use(P.ZP).mount("#app")}},n={};function t(e){var C=n[e];if(void 0!==C)return C.exports;var o=n[e]={exports:{}};return r[e].call(o.exports,o,o.exports,t),o.exports}t.m=r,function(){var r=[];t.O=function(n,e,C,o){if(!e){var s=1/0;for(i=0;i<r.length;i++){e=r[i][0],C=r[i][1],o=r[i][2];for(var c=!0,l=0;l<e.length;l++)(!1&o||s>=o)&&Object.keys(t.O).every((function(r){return t.O[r](e[l])}))?e.splice(l--,1):(c=!1,o<s&&(s=o));if(c){r.splice(i--,1);var a=C();void 0!==a&&(n=a)}}return n}o=o||0;for(var i=r.length;i>0&&r[i-1][2]>o;i--)r[i]=r[i-1];r[i]=[e,C,o]}}(),function(){t.n=function(r){var n=r&&r.__esModule?function(){return r["default"]}:function(){return r};return t.d(n,{a:n}),n}}(),function(){t.d=function(r,n){for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)}}(),function(){t.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var r={143:0};t.O.j=function(n){return 0===r[n]};var n=function(n,e){var C,o,s=e[0],c=e[1],l=e[2],a=0;if(s.some((function(n){return 0!==r[n]}))){for(C in c)t.o(c,C)&&(t.m[C]=c[C]);if(l)var i=l(t)}for(n&&n(e);a<s.length;a++)o=s[a],t.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return t.O(i)},e=self["webpackChunkclient"]=self["webpackChunkclient"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(4452)}));e=t.O(e)})();
//# sourceMappingURL=app.8b565eec.js.map