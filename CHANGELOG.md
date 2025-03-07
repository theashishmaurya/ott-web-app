## [4.30.0](https://github.com/jwplayer/ott-web-app/compare/v4.28.0...v4.30.0) (2023-11-06)


### Features

* add profile created success modal ([296c548](https://github.com/jwplayer/ott-web-app/commit/296c54898ebc106afb87fb048d6379a81f3c6308))
* add profiles to user menu ([b63e7e7](https://github.com/jwplayer/ott-web-app/commit/b63e7e71eb9dda1d1c059c34359fe4a1d2601580))
* add spacing between custom register fields ([6439861](https://github.com/jwplayer/ott-web-app/commit/6439861942e5cd59d9416d0db983a77bd1ed335c))
* created CustomRegisterField.test.tsx ([39efcd0](https://github.com/jwplayer/ott-web-app/commit/39efcd0819552df00498fb65099bac66cc516c98))
* custom register fields ([f7a5249](https://github.com/jwplayer/ott-web-app/commit/f7a5249981791bbab28d2a6ab01fa13308c8add2))
* design changes, remove unnecessary logic, translations ([9d458bd](https://github.com/jwplayer/ott-web-app/commit/9d458bd52afb750b6ee8cb40e7d639eeefb2bba0))
* implement "datepicker" as the last custom register field ([d66d5da](https://github.com/jwplayer/ott-web-app/commit/d66d5da3cf789431bf6937efbdb7dca385f4b00b))
* **project:** add an image label as a custom param for playlists ([63a85b5](https://github.com/jwplayer/ott-web-app/commit/63a85b51000b5fd03afabead15509e2b78106bf5))
* **project:** implement translation of CRF dropdown ([2cbe095](https://github.com/jwplayer/ott-web-app/commit/2cbe09586a25eedf7c1a428ecb1cd80a92de81b5))
* **project:** profiles loading overlay ([b37cd94](https://github.com/jwplayer/ott-web-app/commit/b37cd9403eb5141372a34897f66cb53265eb844a))
* **project:** update edit and create forms ([b40c144](https://github.com/jwplayer/ott-web-app/commit/b40c1445d397ea3cbfafcb97335de85df271263d))
* refactor profiles calls to services and controllers ([416e3b7](https://github.com/jwplayer/ott-web-app/commit/416e3b788b3970e707fcc251b9db78b25d244409))
* selecting profiles ([b6a978f](https://github.com/jwplayer/ott-web-app/commit/b6a978fd75b157543f5922bf6c04df80f0668ba9))
* updated test snaps ([09a32ae](https://github.com/jwplayer/ott-web-app/commit/09a32aedd5a85fa73ca686ce933b2937a2233acc))
* **user:** hw manage profiles ([03f0936](https://github.com/jwplayer/ott-web-app/commit/03f0936e50946f848ba81038e8bba94032255d15))


### Bug Fixes

* add comment in DateField ([1d50c00](https://github.com/jwplayer/ott-web-app/commit/1d50c008f00fe19927ae14f8ec76f3e626abf6af))
* add config check for profiles feature ([00288a0](https://github.com/jwplayer/ott-web-app/commit/00288a0caeb406fbd3bcfaed55a9ff8c313a5368))
* add enabled flag for useProfiles ([2b6cc37](https://github.com/jwplayer/ott-web-app/commit/2b6cc3733c4019109a8b5d8dc9c037a84fd3b8c3))
* add missing machine translations for ES in profiles ([3ba6592](https://github.com/jwplayer/ott-web-app/commit/3ba659289b593a5e23ff82c526cf169b6d2e2d2b))
* add various profiles fixes and improvements ([4d85c1c](https://github.com/jwplayer/ott-web-app/commit/4d85c1c1b481fbdcc688b1693b512663fbfe40a5))
* additional profiles PR comments fixes ([514f3ca](https://github.com/jwplayer/ott-web-app/commit/514f3ca0e592f4a429983acffbb16458b9e48b7a))
* appConfig from store instead of from search params ([63b5134](https://github.com/jwplayer/ott-web-app/commit/63b5134358656ca798cc1ab74afb99aef12a24a7))
* avoid using auth provider name in components ([1a8a70c](https://github.com/jwplayer/ott-web-app/commit/1a8a70ca4ae07b6cca2195ee968c309a49c0bcc7))
* avoided response mapping in cleeng ([b172dc7](https://github.com/jwplayer/ott-web-app/commit/b172dc72eb745c0966392f543edd3cde0b8071cf))
* border radius ([9e1d80b](https://github.com/jwplayer/ott-web-app/commit/9e1d80ba425c81407e2f459dffcb4b895568cef8))
* bugs ([1185de2](https://github.com/jwplayer/ott-web-app/commit/1185de20671d5e5d764c3c25f9081ba4759c057a))
* bugs ([77758eb](https://github.com/jwplayer/ott-web-app/commit/77758eb1c38af0b306af8532565ec750ee295bb9))
* check if user exists before redirecting to profiles ([fb88927](https://github.com/jwplayer/ott-web-app/commit/fb8892745808f6d7751f865e50fa54dca1e66ec0))
* cleanup from a redundant condition ([9106f05](https://github.com/jwplayer/ott-web-app/commit/9106f050836c74661b6f216d055109a2e4b8e4d3))
* consent checkbox wasn't rendered for cleeng ([3e7ed31](https://github.com/jwplayer/ott-web-app/commit/3e7ed31e5cc7319c16907f54b844a497a6cbcb6d))
* countries and US states translated to Spanish ([beb1154](https://github.com/jwplayer/ott-web-app/commit/beb115413009039e5ad1e75f01125c41d0e3f986))
* create profile service and controller ([865e321](https://github.com/jwplayer/ott-web-app/commit/865e321e4ec13e2a42f3aebec7a0724c80414674))
* css design changes ([a102b6f](https://github.com/jwplayer/ott-web-app/commit/a102b6fb961d24b151ae36af60deec5d77dd31ce))
* don't display "first_name" and "surname" custom register fields in registration step 1 ([252feb2](https://github.com/jwplayer/ott-web-app/commit/252feb2d96dc35c03abd34afef95cd21902071a1))
* fix design related comments ([08ef531](https://github.com/jwplayer/ott-web-app/commit/08ef5316f5ab62c161fdbd3f55c786b0b3f6cd2e))
* fix env, fix loader logic ([5e2dc7a](https://github.com/jwplayer/ott-web-app/commit/5e2dc7ae7000e36432fbaa42e8d37398f3e09c01))
* fix form type in update profile ([9bb2fa5](https://github.com/jwplayer/ott-web-app/commit/9bb2fa5d9a82f626748033a0f0a3f5fd0a856dae))
* fix loading overlay, move select profile logic to controller ([519f76e](https://github.com/jwplayer/ott-web-app/commit/519f76ec105f502fbbb8ecf0d9b35c08e20c3beb))
* fix missing icon when profiles are disabled ([888d44f](https://github.com/jwplayer/ott-web-app/commit/888d44f34d20ef88c7d995c25f2cf084d1a09c19))
* fix typescript error in vite.config.ts ([27b0154](https://github.com/jwplayer/ott-web-app/commit/27b0154c38c1ff275f65e525c11adfaae4fcaa6e))
* fix undefined in url ([9cc5fa9](https://github.com/jwplayer/ott-web-app/commit/9cc5fa9d3a0216b831ad9688e1376b3eb5f11b31))
* fix user page tabs ([67bd642](https://github.com/jwplayer/ott-web-app/commit/67bd642942361390975469b39cd79b5b7e898b22))
* fixed consent updating in Account section ([d378708](https://github.com/jwplayer/ott-web-app/commit/d3787081395613fd11ff2327f853bb6121c5b60a))
* fixed reconciliation issue in FormSection ([a6d069d](https://github.com/jwplayer/ott-web-app/commit/a6d069d3000ff4c927ceb565a8289c29923b4521))
* form validation fixes, avatars update, move logic from hooks to controller ([5ad40d3](https://github.com/jwplayer/ott-web-app/commit/5ad40d371135e42a517bbf5a6b41883166e01098))
* handle same profile name error ([a22f133](https://github.com/jwplayer/ott-web-app/commit/a22f13308fa451f66410ff32b1fb6d6b65a9b820))
* i18n fixes, move useProfiles logic to controller and service ([d15e2ac](https://github.com/jwplayer/ott-web-app/commit/d15e2ac3f5fa35bc7418ba4908f3502b07f8fbf9))
* implement custom register fields in Account section ([4aa35f5](https://github.com/jwplayer/ott-web-app/commit/4aa35f534f5b4503444b2e7b7378e7602386806b))
* infinite rerender fix, refetch fix ([c8acc0f](https://github.com/jwplayer/ott-web-app/commit/c8acc0f88ca614cc6bc460f99ad753b8470f0509))
* invalidate listProfiles on register ([f3b9473](https://github.com/jwplayer/ott-web-app/commit/f3b94734072748c7ca4a86aeabd814b720f21e67))
* invalidate publisher consents on config change ([e78b05b](https://github.com/jwplayer/ott-web-app/commit/e78b05b870a5a55b9a62a5320f20bef73cde82ea))
* jwpltx crash fix and multiple test improvements ([4118327](https://github.com/jwplayer/ott-web-app/commit/411832770b94cee4156c416218ddf0111488bafc))
* lint error ([ddeb8f1](https://github.com/jwplayer/ott-web-app/commit/ddeb8f1bb71e425fc7112137a01784373ff31a5d))
* pr comments ([662cc18](https://github.com/jwplayer/ott-web-app/commit/662cc182ad9190fc14a10f0dc9d5493ed3761bac))
* pr comments ([db138a2](https://github.com/jwplayer/ott-web-app/commit/db138a252ab26d75a6f649041fff24356614ca05))
* pr comments ([9a98254](https://github.com/jwplayer/ott-web-app/commit/9a982546bdf0e0a7f14ae46c73ccc9237327acd1))
* profilebox css fixes ([10f2594](https://github.com/jwplayer/ott-web-app/commit/10f25944600bdae280adec1972e777440cc9508e))
* pull request feedback corrections ([02e4fc7](https://github.com/jwplayer/ott-web-app/commit/02e4fc70e000def046edb3f8ca6db0c3ba1797f2))
* re-introduce the new "other_registration_details" translation line ([c7ac8e8](https://github.com/jwplayer/ott-web-app/commit/c7ac8e8d9d8fee30da6e9eabbb7740b398fecf05))
* re-introduced the previously reverted changes ([77606db](https://github.com/jwplayer/ott-web-app/commit/77606db87c35fee24f4efb1e18bedc35f12423fa))
* refactor CustomRegisterField.tsx ([f04af0e](https://github.com/jwplayer/ott-web-app/commit/f04af0e20882c64e7e7f17ecc0ac9cc351769596))
* refactor profile and account controllers to avoid calling initializeAccount multiple times ([1f08006](https://github.com/jwplayer/ott-web-app/commit/1f08006320e2b70a0b6ddbb596030ebc6ad9cfaa))
* remove no longer necessary type casting ([035de63](https://github.com/jwplayer/ott-web-app/commit/035de632509dd7adb631a9f6bdc128643a8b4582))
* remove redundant "static" folder with json files ([42ef8b2](https://github.com/jwplayer/ott-web-app/commit/42ef8b25795f4b192604441e86d57c567c91c0a5))
* remove redundant destructuring ([a84c6da](https://github.com/jwplayer/ott-web-app/commit/a84c6da5f4ee37451e8ff02c15e1858f9568d627))
* remove svod check for profiles, replace type guard check with yup ([2043921](https://github.com/jwplayer/ott-web-app/commit/2043921bddb67f97a1f197e096f7ee919aadbdae))
* remove unnecessary config check, add default avatar ([57d02df](https://github.com/jwplayer/ott-web-app/commit/57d02dfd7c183a87ea2d9b032a41fa2cd6868be2))
* remove unnecessary helper text, rename class, fix profile persist on relog ([1c7a537](https://github.com/jwplayer/ott-web-app/commit/1c7a53755b7b9a6db400322fbef10ae8d5455dc7))
* remove unnecessary localstorage key ([1a504b5](https://github.com/jwplayer/ott-web-app/commit/1a504b5fc951dca2e3c50a127ad7500d506c5d7f))
* removed a no longer valid comment ([22fcdb8](https://github.com/jwplayer/ott-web-app/commit/22fcdb8d19106f3c90cb285928d70c715ee005a2))
* removed redundant conversion to string ([651d552](https://github.com/jwplayer/ott-web-app/commit/651d552881ea826cc19370a1c5af1db1e5663577))
* rename a var ([26bef11](https://github.com/jwplayer/ott-web-app/commit/26bef11290a6052eecce7e60fc72e6d18c1d6d7c))
* replaced an enum with union type ([386df1a](https://github.com/jwplayer/ott-web-app/commit/386df1ae8ffedb2be37072ab8c992d26db52c7b7))
* replaced ConsentFieldVariants enum with union types ([0b69fc3](https://github.com/jwplayer/ott-web-app/commit/0b69fc3928404be8910bd62bc063bbaaf1c51bbe))
* revert last change ([a6d1634](https://github.com/jwplayer/ott-web-app/commit/a6d163422e710e1f929b5927b41f94e26cdb36ab))
* revert one of the last changes ([8ec620c](https://github.com/jwplayer/ott-web-app/commit/8ec620c749ba860d0a7527781540c047ed72dc00))
* rollback live channel links pending route refactor ([#373](https://github.com/jwplayer/ott-web-app/issues/373)) ([3f06b11](https://github.com/jwplayer/ott-web-app/commit/3f06b11a97bcc249eedb96c42479bbe01ab81454))
* run i18next, add favorites check ([4a7c286](https://github.com/jwplayer/ott-web-app/commit/4a7c286c0da7716d3d15992f07240f4735cd5987))
* run i18next, add missing translations ([0356463](https://github.com/jwplayer/ott-web-app/commit/0356463cb5447f0f1fc47cc2599d41d96b768b9b))
* set default avatarUrl for profiles in store, group profile related props ([98116a8](https://github.com/jwplayer/ott-web-app/commit/98116a8355b2f4a313407a8b217ab5137f4c40ea))
* show "optional" even when no label in Dropdown ([d9f2ee5](https://github.com/jwplayer/ott-web-app/commit/d9f2ee541a8c5d486ffddbe4a09c1711e545bbd1))
* sync with base branch ([7db6763](https://github.com/jwplayer/ott-web-app/commit/7db67638f8ffa9143c33d9b845ba8069ddc20229))
* translations, profiles refetch ([fa22d1c](https://github.com/jwplayer/ott-web-app/commit/fa22d1c3789d78cd772c2f9fb6bcada30e4348b5))
* type casting to supress incorrect type from SDK ([f7f1f6d](https://github.com/jwplayer/ott-web-app/commit/f7f1f6db8399c8477a09be57afca6a6b7d2e1295))
* update .depcheckrc.yaml ([f373f0e](https://github.com/jwplayer/ott-web-app/commit/f373f0e6341e7c0e9bcd730cc43888fa75d27159))
* update Account.tsx ([3b81892](https://github.com/jwplayer/ott-web-app/commit/3b81892b2674f9fa420f4949648db51b631c6723))
* update payment card sdk version and types ([029f684](https://github.com/jwplayer/ott-web-app/commit/029f684fc112ec39e2998bf8e4d02789032c0fa5))
* update profile hooks with fetch logic ([bba1c70](https://github.com/jwplayer/ott-web-app/commit/bba1c702d9fb3ea6084826290a910a3286bc3822))
* update react-i18next mock in vitest.setup.ts ([8de258c](https://github.com/jwplayer/ott-web-app/commit/8de258cd62b270a902a4f3125a446c01cfaf2c01))
* updated country and US state codes ([6715cae](https://github.com/jwplayer/ott-web-app/commit/6715cae32e1f47fbe4e18e7e2c03acccd0f49dc9))
* vqa2 fixes ([e418746](https://github.com/jwplayer/ott-web-app/commit/e4187466f476def176bf2cd6ba290af016ab4237))
* watch history bug ([1fc01ef](https://github.com/jwplayer/ott-web-app/commit/1fc01efb6ff5c9e0e7bc318cd7857567ef10c69f))

## [4.27.0](https://github.com/jwplayer/ott-web-app/compare/v4.25.0...v4.27.0) (2023-08-30)


### Features

* **project:** convert click based navigation to use links for SEO ([625fbdc](https://github.com/jwplayer/ott-web-app/commit/625fbdc5f845fb79cf33a8fe97459e728be0df4c))
* **project:** update react ([03e3d30](https://github.com/jwplayer/ott-web-app/commit/03e3d300a4c0e451eb6124ac418b0ed469b23a95))
* **project:** update React to 18.2.0 ([c98512d](https://github.com/jwplayer/ott-web-app/commit/c98512d4876b81759afa2883875048503e98e419))
* **project:** update react to 18.2.0 and related dependencies ([83931d2](https://github.com/jwplayer/ott-web-app/commit/83931d235dcba122f0f054bacf891081cbc64821))


### Bug Fixes

* **project:** fix helmet for legacy series after react update ([90d489c](https://github.com/jwplayer/ott-web-app/commit/90d489c67dde2d10324a5a554a7b28cfe99d5823))

## [4.25.0](https://github.com/jwplayer/ott-web-app/compare/v4.23.2...v4.25.0) (2023-08-01)


### Features

* initial inplayer subscription change implementation ([b335b69](https://github.com/jwplayer/ott-web-app/commit/b335b69f6429bb73a72cd8a442f5e52fdf77084b))
* **project:** add new `cardImageAspectRatio` custom param for playlists ([65264eb](https://github.com/jwplayer/ott-web-app/commit/65264eb5ae99fcbfb9348de01e9ed6a8f64c9cf0))
* **project:** fix lhci workflow ([466e8e3](https://github.com/jwplayer/ott-web-app/commit/466e8e3650d769bdcf324539d7c27e1fb6d8df11))
* **project:** lighthouse actions triggering ([0d004eb](https://github.com/jwplayer/ott-web-app/commit/0d004eb216c4dec331be93e0c35d3e369861b11a))
* **project:** lighthouse check ([3ba3617](https://github.com/jwplayer/ott-web-app/commit/3ba36174b114a46905942ed3ede1f085654c9729))
* **project:** remove ImageData type ([6f993c6](https://github.com/jwplayer/ott-web-app/commit/6f993c608a98fa4c6269a0ccf69058f434054f81))
* **project:** use a native fallback for image service ([0fc9bd6](https://github.com/jwplayer/ott-web-app/commit/0fc9bd6fcf71d43e336d1759410a2a5a5c40352b))
* **series:** add native support for next episodes ([1f11d6a](https://github.com/jwplayer/ott-web-app/commit/1f11d6a445813957277abcaedf3975ec6fb05bc1))
* **series:** use named params ([ba6560e](https://github.com/jwplayer/ott-web-app/commit/ba6560e53ac291e671b53c9206eeaf197c135253))
* temporary FE handling for downgrade subscription ([53ee10d](https://github.com/jwplayer/ott-web-app/commit/53ee10d7e26c9a9dea5454c00ae869b115169a7d))


### Bug Fixes

* add missing Spanish translations ([2270049](https://github.com/jwplayer/ott-web-app/commit/22700493c6e3bb9a247684aa353002d68cbde509))
* add per-provider flag for subscription change tests ([19cd475](https://github.com/jwplayer/ott-web-app/commit/19cd4752177a0c816e257a1192337b41664af37b))
* choose offer modal without pricing options ([bc8389e](https://github.com/jwplayer/ott-web-app/commit/bc8389e3ab9f0c343e25d3dcf60f139b56204f34))
* disable change subscription button when subscription is cancelled and can't renew ([be09ba2](https://github.com/jwplayer/ott-web-app/commit/be09ba2b3cb8ae6688e7673f8216e31b02e38bf0))
* hide cancel button for inplayer configs ([8f71448](https://github.com/jwplayer/ott-web-app/commit/8f714488fc5d21725f9a8d1286326f38c7b9608c))
* move additional logic to container ([7a350fa](https://github.com/jwplayer/ott-web-app/commit/7a350fab301e841d9a7c126033e6045247fbec52))
* move logic from user and payment to paymentcontainer ([6b7a72a](https://github.com/jwplayer/ott-web-app/commit/6b7a72ab5126431f8a19dae18cd992d1f59cffd6))
* move useoffers call to payments ([1cfcf45](https://github.com/jwplayer/ott-web-app/commit/1cfcf454231d101d9975c50958fb07d32dfff9dd))
* offerswitch props ([d79f779](https://github.com/jwplayer/ott-web-app/commit/d79f779c7ac9a7ff5a46ce4702df68f8145fa572))
* pr comments ([c9d5bbb](https://github.com/jwplayer/ott-web-app/commit/c9d5bbba4f1c29adf733d678a981a6cfd968574f))
* remove unnecessary redirect ([4a8a5ff](https://github.com/jwplayer/ott-web-app/commit/4a8a5ff75759ba76fd07361cc2f7670f70a9ade7))
* **seo:** fix seo score ([2274c9b](https://github.com/jwplayer/ott-web-app/commit/2274c9b5999507a96f781ee5d5ba1501b00036e5))
* tests ([0654af6](https://github.com/jwplayer/ott-web-app/commit/0654af6665bc1b542ea1148fb64cc00806b8446b))
* **watchhistory:** improve watch history storage calls and fix bugs ([9fd1774](https://github.com/jwplayer/ott-web-app/commit/9fd17746d27490d43fe6f595252bba29c9e20d02))

### [4.23.2](https://github.com/jwplayer/ott-web-app/compare/v4.23.1...v4.23.2) (2023-07-06)


### Bug Fixes

* **deps:** bump @sideway/formula from 3.0.0 to 3.0.1 ([#309](https://github.com/jwplayer/ott-web-app/issues/309)) ([8dbb314](https://github.com/jwplayer/ott-web-app/commit/8dbb3145a866237b9cb07e2e61caf69bac2a1d55))

### [4.23.1](https://github.com/jwplayer/ott-web-app/compare/v4.23.0...v4.23.1) (2023-07-06)


### Bug Fixes

* **project:** add meta tag for GA ([#330](https://github.com/jwplayer/ott-web-app/issues/330)) ([87db5f9](https://github.com/jwplayer/ott-web-app/commit/87db5f9a5dc2ab42117267933b5a914825a756bb))

## [4.23.0](https://github.com/jwplayer/ott-web-app/compare/v4.22.0...v4.23.0) (2023-07-06)


### Features

* av ([743af3e](https://github.com/jwplayer/ott-web-app/commit/743af3e4b855fed61178f2b8f52757edeb944e6f))
* code cleanup ([13a1e21](https://github.com/jwplayer/ott-web-app/commit/13a1e2120adf9486fb4e34b8544726811331c4c3))
* comment fix ([6ab4dcb](https://github.com/jwplayer/ott-web-app/commit/6ab4dcbff33f95539cbf8c20fc18b67976463f07))
* fix vite config definition ([2d772ed](https://github.com/jwplayer/ott-web-app/commit/2d772ed52ae835485fe48ffc4a0b3352ab9edcb5))
* oiid for analytics ([898f94a](https://github.com/jwplayer/ott-web-app/commit/898f94a6683dfcc18020deef90fc8a1bc987b6b3))
* update docs ([1fa1bcf](https://github.com/jwplayer/ott-web-app/commit/1fa1bcf093ff24514ead4e2a4ae943badf6f0871))

## [4.22.0](https://github.com/jwplayer/ott-web-app/compare/v4.21.0...v4.22.0) (2023-07-05)


### Features

* **project:** remove github pages ([a83bfe9](https://github.com/jwplayer/ott-web-app/commit/a83bfe9ac5087def6d46bebce2b226ec80313cbf))
* **project:** remove hash routing ([91acf86](https://github.com/jwplayer/ott-web-app/commit/91acf86508b9b93fbb7ef965b12aa05ac8e5b246))

## [4.21.0](https://github.com/jwplayer/ott-web-app/compare/v4.20.0...v4.21.0) (2023-07-05)


### Features

* **project:** test cases for analytics ([2abf28b](https://github.com/jwplayer/ott-web-app/commit/2abf28b88cb716efb33ac154e375285c307e7246))
* **project:** test cases for analytics ([41f900d](https://github.com/jwplayer/ott-web-app/commit/41f900d88361b862048e281e00ffe27fc5ec7c04))

## [4.20.0](https://github.com/jwplayer/ott-web-app/compare/v4.19.1...v4.20.0) (2023-07-04)


### Features

* **project:** add variable for GA ([fa0e0d7](https://github.com/jwplayer/ott-web-app/commit/fa0e0d75e20ea506bb2ebde92f9744e1645cab16))

### [4.19.1](https://github.com/jwplayer/ott-web-app/compare/v4.19.0...v4.19.1) (2023-06-20)


### Bug Fixes

* **payment:** infinite render loop when opening choose offer modal ([34fe708](https://github.com/jwplayer/ott-web-app/commit/34fe70860896cd741afddcb50087fd0b6564ed0b))
* **payment:** react error after payment ([58b877f](https://github.com/jwplayer/ott-web-app/commit/58b877fd4be086b90e01301f1c898059509f4bab))

## [4.19.0](https://github.com/jwplayer/ott-web-app/compare/v4.18.0...v4.19.0) (2023-06-20)


### Features

* **series:** add season titles as filters ([c42f9ad](https://github.com/jwplayer/ott-web-app/commit/c42f9ade9e74dd445124578d2f2bb7beaf144ec6))
* **series:** modify i18n keys for seasons ([bcbfa1c](https://github.com/jwplayer/ott-web-app/commit/bcbfa1cb23c60d0c31bb09faa9b85724c935ba94))


### Bug Fixes

* **series:** select All episodes ([3ed1151](https://github.com/jwplayer/ott-web-app/commit/3ed115126974bd251cde7c0b1198d70edc7f2f0d))

## [4.18.0](https://github.com/jwplayer/ott-web-app/compare/v4.17.0...v4.18.0) (2023-06-19)


### Features

* add machine translations for delete account and social login ([51a9485](https://github.com/jwplayer/ott-web-app/commit/51a94855e814421aa43d8702024c41c5fec0c96e))

## [4.17.0](https://github.com/jwplayer/ott-web-app/compare/v4.16.1...v4.17.0) (2023-06-19)


### Features

* edit card details ([58da6e1](https://github.com/jwplayer/ott-web-app/commit/58da6e155be8ac73398421b963d667b82734c06f))
* empty line delted ([815ab5a](https://github.com/jwplayer/ott-web-app/commit/815ab5a571c6e0d0ba3849bf8a4e229d8cff9119))


### Bug Fixes

* lint ([6639dcf](https://github.com/jwplayer/ott-web-app/commit/6639dcf71b787a22727524e22dd0f146bd4f087a))
* pr changes ([935748a](https://github.com/jwplayer/ott-web-app/commit/935748a0862d1a60e85231924c272b4981f42060))
* test ([4a62cfb](https://github.com/jwplayer/ott-web-app/commit/4a62cfb8284de2072aa0e1103d08f2d48ed6cc69))

### [4.16.1](https://github.com/jwplayer/ott-web-app/compare/v4.16.0...v4.16.1) (2023-06-19)


### Bug Fixes

* period ([259db6c](https://github.com/jwplayer/ott-web-app/commit/259db6cf6556bf916173c1f79d11533d8e3d82e8))

## [4.16.0](https://github.com/jwplayer/ott-web-app/compare/v4.15.0...v4.16.0) (2023-06-16)


### Features

* add initial handling for simultaneous login websocket ([b28d0a2](https://github.com/jwplayer/ott-web-app/commit/b28d0a2483cb7936a4663c3b4ced5887634222f9))
* className changed ([19748e7](https://github.com/jwplayer/ott-web-app/commit/19748e7bb093fe28b134b3ac04a40d040fcf06d1))
* simultaneous logins modal has been added ([06f3679](https://github.com/jwplayer/ott-web-app/commit/06f367956ba3102b62d42c0a2b42996264b3b3c1))


### Bug Fixes

* added transaltion ([3d85038](https://github.com/jwplayer/ott-web-app/commit/3d85038be81461552d6594ecc0668a47acc47261))
* added translations ([0493a0d](https://github.com/jwplayer/ott-web-app/commit/0493a0d07ca31f4ed94d28e22032cf316e2d218a))
* forgotten logout reorder ([a9a24ca](https://github.com/jwplayer/ott-web-app/commit/a9a24ca0b63bbcf668e74b3f4b9393876d3778b2))
* handle logout reason ([a6636a1](https://github.com/jwplayer/ott-web-app/commit/a6636a12a4a098f678e096996689039778a9630e))
* loading state ([2093530](https://github.com/jwplayer/ott-web-app/commit/2093530cd0b6d61e3343cc25a93d000bb12e513c))
* loading state added ([1cd4df1](https://github.com/jwplayer/ott-web-app/commit/1cd4df139ddaf21349f5e8db55ad2703422e6531))
* remove use account ([8b288ae](https://github.com/jwplayer/ott-web-app/commit/8b288aeab7252f3fb3dd50e5ddae5fb492d153e3))
* yarn i18next ([b43a600](https://github.com/jwplayer/ott-web-app/commit/b43a60087a5c1a94be96ce44157828ba38b940c1))

## [4.15.0](https://github.com/jwplayer/ott-web-app/compare/v4.14.0...v4.15.0) (2023-06-15)


### Features

* add "other_registration_details" as a new translation text ([2c489a2](https://github.com/jwplayer/ott-web-app/commit/2c489a2f966083328ecb36a33093a4e8710d0f5e))


### Bug Fixes

* revert English translation ([d5e98eb](https://github.com/jwplayer/ott-web-app/commit/d5e98eb7cde1aaa10c6cff3387a3403d6632bd24))

## [4.14.0](https://github.com/jwplayer/ott-web-app/compare/v4.13.0...v4.14.0) (2023-06-15)


### Features

* add logic for inplayer social login ([04c1d74](https://github.com/jwplayer/ott-web-app/commit/04c1d74967c905009d6bdf2e9ce352e6f32cdafa))
* initial social login buttons implementation ([0dd1204](https://github.com/jwplayer/ott-web-app/commit/0dd120486ef47a6e9dcfd9036cc72ceb699e1a45))

## [4.13.0](https://github.com/jwplayer/ott-web-app/compare/v4.12.1...v4.13.0) (2023-06-15)


### Features

* add error handling for account deletion ([25b2f5a](https://github.com/jwplayer/ott-web-app/commit/25b2f5a5ca96491bed3bae789c1e60fef35f09d2))
* add reset to useForm, handle back button in DeleteAccountModal ([eacd3b7](https://github.com/jwplayer/ott-web-app/commit/eacd3b7575cc0d6cbf891c7ed7943c9b4b66ab76))
* **user:** initial account deletion implementation ([b6eda04](https://github.com/jwplayer/ott-web-app/commit/b6eda042a230f106b6a14ea7844b887778a0696d))

### [4.12.1](https://github.com/jwplayer/ott-web-app/compare/v4.12.0...v4.12.1) (2023-06-08)


### Bug Fixes

* ran yarn i18next ([267bcf5](https://github.com/jwplayer/ott-web-app/commit/267bcf5e9604923c4d7114d37acc2a9129949891))
* removed files already removed in develop ([37f9030](https://github.com/jwplayer/ott-web-app/commit/37f9030d183742051ab9530799aadcd86878f08d))
* reverted incorrect changes ([633c84d](https://github.com/jwplayer/ott-web-app/commit/633c84da520a076e73601d37d862f3b50e5d4616))
* run prettier in FormSection ([996e420](https://github.com/jwplayer/ott-web-app/commit/996e4209d4f0fd8df2bbcb33250f481ef3134973))
* run yarn i18next ([829603f](https://github.com/jwplayer/ott-web-app/commit/829603fb028a217e021c56afda7b7c60f8564fdb))
* update user.json ([c3f5434](https://github.com/jwplayer/ott-web-app/commit/c3f5434fe6a560cfe26c518c56ede46ba04dd359))

## [4.12.0](https://github.com/jwplayer/ott-web-app/compare/v4.11.1...v4.12.0) (2023-06-02)


### Features

* add functionality to open and view invoices ([79b6fc7](https://github.com/jwplayer/ott-web-app/commit/79b6fc7b11669fdef685dbfb503ace6336bfc7ca))
* add today icon to vod items ([6a681ce](https://github.com/jwplayer/ott-web-app/commit/6a681cea7f81521a694e083c054a64362e717332))
* adds scheduled start to card component ([dc3bf41](https://github.com/jwplayer/ott-web-app/commit/dc3bf4137c72a9ce322c7f3163d0b9c6b2ac8062))
* **auth:** improve cleeng session stablity ([245c0f8](https://github.com/jwplayer/ott-web-app/commit/245c0f81272143f64fd478208dcaa93d7bbf0feb))
* **e2e:** test opening invoices ([7a0d029](https://github.com/jwplayer/ott-web-app/commit/7a0d0294e21cbce765fe3dbc5029df8999ff358d))
* hide tax and payment provider fees when not applicable ([790dba4](https://github.com/jwplayer/ott-web-app/commit/790dba4f064c63fa74e394de0272c4a846b7028f))
* **i18n:** fix spanish translation after validation ([a0e7cb0](https://github.com/jwplayer/ott-web-app/commit/a0e7cb0b41f0a2ee297996afdb582ba45eaa7255))
* **payment:** integrate new adyen payment flow (incl 3DS) ([bb0f745](https://github.com/jwplayer/ott-web-app/commit/bb0f7451beceae4f15650bafb1f45644d441c55a))
* **payment:** update payment details ([f978779](https://github.com/jwplayer/ott-web-app/commit/f9787796705eafc87aa8764724d40184a6f74ed7))
* **project:** add bcl live events  ([0c53b06](https://github.com/jwplayer/ott-web-app/commit/0c53b060a2af3eb0743bfc92708233c14d04cd6b))
* **project:** add support for other languages ([f5aaf2c](https://github.com/jwplayer/ott-web-app/commit/f5aaf2c88e6eafd6be3538b478dd3e67f86370bf))
* **project:** auto refetch media item ([b62300f](https://github.com/jwplayer/ott-web-app/commit/b62300f71b8d2c2e28df997466d0f2d6a1038d3b))
* remove pricing on payment page for granted subscriptions ([9745686](https://github.com/jwplayer/ott-web-app/commit/97456861ed07651ca0d17f3e408c0defb1c4acdc))
* **user:** add functionality to switch offers ([2f01739](https://github.com/jwplayer/ott-web-app/commit/2f01739b8b5638c0dd879c93aca895dd63db18cc))
* **user:** enhance pending offer confirmation and on the payments page ([2a598b7](https://github.com/jwplayer/ott-web-app/commit/2a598b728aa30cc860e5805d602224f7866be3e0))


### Bug Fixes

* **home:** endless spinner in bottom row ([2517b9a](https://github.com/jwplayer/ott-web-app/commit/2517b9aae417648d0f775a8659f2ee85afdc92b2))
* **home:** reintroduce the sign in button ([4ac4dd6](https://github.com/jwplayer/ott-web-app/commit/4ac4dd607cf20eb11718aca3be605e83e0079608))
* **menu:** overlap issue with user and language icons ([09a3339](https://github.com/jwplayer/ott-web-app/commit/09a3339eb401ac06b243dd4f09a238cb3e3716d7))
* **menu:** prevent duplicate visible menus ([e4b9267](https://github.com/jwplayer/ott-web-app/commit/e4b92674c9ffa755d2caf506856a459619cb5355))
* **payment:** fix change subscription button overlap ([f4eb4e5](https://github.com/jwplayer/ott-web-app/commit/f4eb4e51f16b208e8ecf723808b696c3e250a4f4))
* **project:** allow empty translations to fall back to the default language ([dedcade](https://github.com/jwplayer/ott-web-app/commit/dedcadee7985e0c101a168113ada1b091f2cd957))
* **project:** not showing updated payment details ([30d65c1](https://github.com/jwplayer/ott-web-app/commit/30d65c19daa13c0ac5cdd09ac7ddac0e03b66b05))
* **project:** show all dates in a localized format ([5022cdb](https://github.com/jwplayer/ott-web-app/commit/5022cdb3df98bd4b035508aba2d54ddeafbb9262))
* **project:** TVOD infinite loop and render optimizations ([ab5af13](https://github.com/jwplayer/ott-web-app/commit/ab5af136ab0f391d082447d360ef984a250ac7da))
* returning to previous screen after redirect ([9f0405e](https://github.com/jwplayer/ott-web-app/commit/9f0405e67e16c331102b0f5f2f0461c20c8961d0))

### [4.11.1](https://github.com/jwplayer/ott-web-app/compare/v4.11.0...v4.11.1) (2023-06-02)


### Bug Fixes

* **chore:** replace configs ([83cdd93](https://github.com/jwplayer/ott-web-app/commit/83cdd93e3662bdd8643b50dafe9254bf8328d686))

## [4.11.0](https://github.com/jwplayer/ott-web-app/compare/v4.10.0...v4.11.0) (2023-05-31)


### Features

* **series:** add new series flow support ([cffb723](https://github.com/jwplayer/ott-web-app/commit/cffb723b74ec95b02f42224b5ab21392fe84d0d3))
* **series:** change navigaton ([2d1667a](https://github.com/jwplayer/ott-web-app/commit/2d1667aae4c94a8053be5b51d7664d260502cd2b))
* **series:** dynamic episodes load ([1e38107](https://github.com/jwplayer/ott-web-app/commit/1e38107fb5674c640b058d42092f5467ae15ab6a))
* **series:** e2e fixes ([2e794d9](https://github.com/jwplayer/ott-web-app/commit/2e794d9f3532ab98415a78d15e1585a6abfc13c2))
* **series:** inline player and query init fix ([e248131](https://github.com/jwplayer/ott-web-app/commit/e248131a70e4ac2e691fb43fd8bf4ec6dd0a933e))
* **series:** node update ([cbbfde5](https://github.com/jwplayer/ott-web-app/commit/cbbfde543ecf0e1ddf8c34a01d02d04200a9fc84))
* **series:** reorganizing series hooks ([6c7523f](https://github.com/jwplayer/ott-web-app/commit/6c7523fdc459235ca409f7d106174fa24b8032cb))
* **series:** review fixes ([b46603a](https://github.com/jwplayer/ott-web-app/commit/b46603a4df25e3534f304cdd96f3a2d718e29691))
* **series:** review fixes ([d9b997e](https://github.com/jwplayer/ott-web-app/commit/d9b997e95ee7672e02cdf2c15dd343772c6bdcc0))
* **series:** review fixes ([5982c9a](https://github.com/jwplayer/ott-web-app/commit/5982c9adfb3912dc405cdb2feaadb752d7b0c24e))
* **series:** series docs ([4dcff53](https://github.com/jwplayer/ott-web-app/commit/4dcff53065e6e34d1326f655c423369488b84f45))
* **series:** support series features ([e9189eb](https://github.com/jwplayer/ott-web-app/commit/e9189eb629d635a1eb98a9bb66579e344d39471a))
* **series:** use separate pages for deprecated and new flows ([df65db2](https://github.com/jwplayer/ott-web-app/commit/df65db25195f32d1364b7c94e3896f6db05af620))
* **series:** watch history and favorites for series ([acd9075](https://github.com/jwplayer/ott-web-app/commit/acd907586a39404292799f4458260ae42d188c40))


### Bug Fixes

* card number parsing error ([66bd0f1](https://github.com/jwplayer/ott-web-app/commit/66bd0f1597e238dfd8b9240ceeb798e6da78e023))
* removed comments ([afacf17](https://github.com/jwplayer/ott-web-app/commit/afacf17dcac0b09d0aa9cc51da75c3930d0e51a8))
* update credit card parsing ([56c539e](https://github.com/jwplayer/ott-web-app/commit/56c539e6f43f6897048d8e97083d20928380f08d))
* update inplayer.js version and types ([f62f359](https://github.com/jwplayer/ott-web-app/commit/f62f3598c2d23fc70d2c5011e76310a2fc40765f))

## [4.10.0](https://github.com/jwplayer/ott-web-app/compare/v4.9.0...v4.10.0) (2023-05-25)


### Features

* export account data initial implementation ([84628b2](https://github.com/jwplayer/ott-web-app/commit/84628b2b272e6ac2e48466a93b1a53c7f798ee88))

## [4.9.0](https://github.com/jwplayer/ott-web-app/compare/v4.8.0...v4.9.0) (2023-05-24)


### Features

* add check ([63ac098](https://github.com/jwplayer/ott-web-app/commit/63ac09836f9874180cc74a985750892bb184d767))
* code cleanup ([e34afe4](https://github.com/jwplayer/ott-web-app/commit/e34afe4b2bd0af0393d28fd0639f827961945ace))
* code cleanup ([d64b3ad](https://github.com/jwplayer/ott-web-app/commit/d64b3ada25360c10d08ed7352dc6cc9f23b52be1))
* code cleanup ([39ef065](https://github.com/jwplayer/ott-web-app/commit/39ef065f6796fab97d02b3522f1a6368be317db6))
* code cleanup ([dfd2f5c](https://github.com/jwplayer/ott-web-app/commit/dfd2f5c2f63c0a82697645b16cd51dbfbf9dd8e6))
* comments cleanup ([35938fc](https://github.com/jwplayer/ott-web-app/commit/35938fc96db80ea3d86f7cd1b1805efeae631f8f))
* oaid ping for analytics ([b9f3991](https://github.com/jwplayer/ott-web-app/commit/b9f3991b0436a25eb49aef6bde46f77e8651f419))


### Bug Fixes

* tvod access type name ([9cf7941](https://github.com/jwplayer/ott-web-app/commit/9cf7941b7e3fe3ffd663fe17859144b796c03272))

## [4.8.0](https://github.com/jwplayer/ott-web-app/compare/v4.7.0...v4.8.0) (2023-05-10)


### Features

* **e2e:** add maunal tests for adv + small fixes ([0b44891](https://github.com/jwplayer/ott-web-app/commit/0b448917657ed8de9fb480bde316fd23eab33c98))
* **e2e:** add maunal tests for ott analytics pipline ([b418e3b](https://github.com/jwplayer/ott-web-app/commit/b418e3b0e18784fbf74098e6b9316be7a58376cf))

## [4.7.0](https://github.com/jwplayer/ott-web-app/compare/v4.6.3...v4.7.0) (2023-05-08)


### Features

* add feedid in player configuration ([9d1d4d9](https://github.com/jwplayer/ott-web-app/commit/9d1d4d970054954252724d3a64652efdabac17c6))
* adjust logic for sending favorites and continue watching playlist id ([fbda6dc](https://github.com/jwplayer/ott-web-app/commit/fbda6dcc4e4e75047f90a9d09084c107c958f74f))
* change feedid for favorites and continue watching to match the playlist id from config file ([a63329a](https://github.com/jwplayer/ott-web-app/commit/a63329a286915414a2d1090ca698726f12226b2c))
* code cleanup ([1e4bb25](https://github.com/jwplayer/ott-web-app/commit/1e4bb25ead3584b4541a5dc2e29e1e1d51f09534))
* correct feed id for recommandations playlist ([089c291](https://github.com/jwplayer/ott-web-app/commit/089c2911d6c7ee44cd7404a8ab87cc0990d0c78f))
* pass feedid to ott analytics for play event ([7a2bf23](https://github.com/jwplayer/ott-web-app/commit/7a2bf23e7f14bd8953543106f753efb2c7645eda))
* remove feed_instance_id ([1b2223b](https://github.com/jwplayer/ott-web-app/commit/1b2223b6b5704715d2e2dc2e51df6258f44d3e74))
* remove feedis setting in store ([b8200ad](https://github.com/jwplayer/ott-web-app/commit/b8200ad6d18293bcd1913c391003c83ffd423430))
* remove unnecessary fed param from play event ([ce3abff](https://github.com/jwplayer/ott-web-app/commit/ce3abff47b03e388f69185da7686ea17e2989604))

### [4.6.3](https://github.com/jwplayer/ott-web-app/compare/v4.6.2...v4.6.3) (2023-05-08)


### Bug Fixes

* **e2e:** fix tests ([4fdfa79](https://github.com/jwplayer/ott-web-app/commit/4fdfa796c2e5797a496f4abd714b2786eada47a8))

### [4.6.2](https://github.com/jwplayer/ott-web-app/compare/v4.6.1...v4.6.2) (2023-04-21)


### Bug Fixes

* **analytics:** fix watch duration by filtering seek events ([22cfa26](https://github.com/jwplayer/ott-web-app/commit/22cfa26dae67204dfe10c69d8370034313cb5b7f))
* **analytics:** fix watch duration by filtering seek events ([048c497](https://github.com/jwplayer/ott-web-app/commit/048c49744d2453df4b5f8d37de96824916314295))
* **analytics:** refactor existing timeouts ([9138a81](https://github.com/jwplayer/ott-web-app/commit/9138a818e1ab7771faaa93bebc4786fd0c72feaa))

### [4.6.1](https://github.com/jwplayer/ott-web-app/compare/v4.6.0...v4.6.1) (2023-04-12)


### Bug Fixes

* handle split full name ([261cb51](https://github.com/jwplayer/ott-web-app/commit/261cb510763c849497e9902c80bc83573ffb9ddb))

## [4.6.0](https://github.com/jwplayer/ott-web-app/compare/v4.5.0...v4.6.0) (2023-04-12)


### Features

* **project:** jwp tvod implementation ([ed1e69d](https://github.com/jwplayer/ott-web-app/commit/ed1e69dea7cfbdbfeee6449060b4ef53e319dee1))


### Bug Fixes

* **project:** fix tabs in ChooseOffers form ([8841940](https://github.com/jwplayer/ott-web-app/commit/88419401aac549bea5672287ba5bb1f16ef26205))
* use location.href instaed of location.origin because of wrong refresh page on payment ([446420d](https://github.com/jwplayer/ott-web-app/commit/446420de6645b90769e3e892eceb4735c4512a26))

## [4.5.0](https://github.com/jwplayer/ott-web-app/compare/v4.4.2...v4.5.0) (2023-04-12)


### Features

* improved methods before merge with the other parts ([3c750c1](https://github.com/jwplayer/ott-web-app/commit/3c750c170496a005d298345ead5d0b56412c00c9))
* init DataTable for running tests in a loop with different configs ([5c4f5a8](https://github.com/jwplayer/ott-web-app/commit/5c4f5a84013be6afaa35b15b085ed6e5ed50720e))
* init subscriptions ([e15bc15](https://github.com/jwplayer/ott-web-app/commit/e15bc15a3d57c74b5d123b29af4b9b8d3ae26893))
* inplayer notifications setup ([a768436](https://github.com/jwplayer/ott-web-app/commit/a7684368bf2ffb709dba9b3b9e6729ce9dced3e5))
* inplayer update account details ([9d5af70](https://github.com/jwplayer/ott-web-app/commit/9d5af7087229066dc39f1024661e49b0c93d2f7c))
* list transactions and show payment method ([b053923](https://github.com/jwplayer/ott-web-app/commit/b053923a45224d9a6a26ae14eda29dc4bd9d823b))
* registration flow ([435029a](https://github.com/jwplayer/ott-web-app/commit/435029aac4f06434b622c45044a51a2494db9c48))


### Bug Fixes

* account uninfied types ([9bb9a68](https://github.com/jwplayer/ott-web-app/commit/9bb9a6861a982ee9092d7202865f6ca9874f5898))
* added authProvider ([6047d31](https://github.com/jwplayer/ott-web-app/commit/6047d315c868965874450a7bc161c94f379fcf65))
* added missing ? ([af7b72d](https://github.com/jwplayer/ott-web-app/commit/af7b72de1ca8b8b9a7878c7257f5ec5d34ab77a0))
* delete duplicates in cleeng type ([5111e48](https://github.com/jwplayer/ott-web-app/commit/5111e4806abc14a01032f9b79334dbb330db928b))
* email in the payload ([852f531](https://github.com/jwplayer/ott-web-app/commit/852f5318df1c5b2ba2cf073ba9ba035eaee48c68))
* executed i18next ([7ac80fd](https://github.com/jwplayer/ott-web-app/commit/7ac80fd1e0acafdc056337422194fa5f9f90f099))
* extend type for update account ([f67de6d](https://github.com/jwplayer/ott-web-app/commit/f67de6d02bf31ce5e110d1559fecfb6d1f3ea0b4))
* handle firstname and surname metadata parameters ([18c3c64](https://github.com/jwplayer/ott-web-app/commit/18c3c648f8b09efd79dccbd326ffd37d257e8ee4))
* improved error response format ([dfc1586](https://github.com/jwplayer/ott-web-app/commit/dfc15863ddc7858f7536cb1ad47c0f0fb0244fd5))
* improved types ([d866033](https://github.com/jwplayer/ott-web-app/commit/d8660332f91a6b5143b0a07891aea4f28c4e081a))
* prevent infinite loop ([fbea493](https://github.com/jwplayer/ott-web-app/commit/fbea493e086d0ea92f186b21288951e8cdb9442a))
* removed webapp dev ini ([a65dba3](https://github.com/jwplayer/ott-web-app/commit/a65dba302b24c979f41e31a580474389d34ae7e1))
* set default email as fullname for InPlayer integration if first and last names are empty ([22f6640](https://github.com/jwplayer/ott-web-app/commit/22f6640f90fa778f0725f03e521b1a3f421f9ada))
* trim first and last names ([cfb5b0b](https://github.com/jwplayer/ott-web-app/commit/cfb5b0ba9cff9f1191426412f0fca29bf3280179))
* trim name and handle multiple whitespaces ([67ccf6a](https://github.com/jwplayer/ott-web-app/commit/67ccf6aaa60bbf9734c36d73b0fe63eceeffe522))
* update flow for update email feature ([6bd308d](https://github.com/jwplayer/ott-web-app/commit/6bd308d025aa705ebc607a2b92becc828d4db8c7))
* update InPlayer SDK version ([36e03bc](https://github.com/jwplayer/ott-web-app/commit/36e03bc1280e60c907404da0f6c397d7ea09b53e))
* updated all tests ([5077dad](https://github.com/jwplayer/ott-web-app/commit/5077dadbcdaf8f3dfc163f8fd64a9f9b4ea99570))
* updated CreditCardCVCField snapshot ([dc7a1f6](https://github.com/jwplayer/ott-web-app/commit/dc7a1f6a134f1dc3381bb3d640ca3ccb94127bdf))
* updated translations ([905f6b9](https://github.com/jwplayer/ott-web-app/commit/905f6b917d390a8e4f528b655021b3458cbe712c))
* using fullName insted of first and last name for the users ([e740cdc](https://github.com/jwplayer/ott-web-app/commit/e740cdc4ef5099d78d89e7724aa67e6ea8ae0168))
* using readOnly to hide the edit button for the email instead of disabling edit button ([96f6da3](https://github.com/jwplayer/ott-web-app/commit/96f6da3bae24a7ebe5f45ff9ec958d0e470c7a90))
* zerofill value for exp_month ([36b71b5](https://github.com/jwplayer/ott-web-app/commit/36b71b5424a96303faf35cd9e2a4e524e933c4ad))

### [4.4.2](https://github.com/jwplayer/ott-web-app/compare/v4.4.1...v4.4.2) (2023-03-29)


### Bug Fixes

* missing voucher in the payload ([ba8cf5b](https://github.com/jwplayer/ott-web-app/commit/ba8cf5b5a69b495d469d52c3936690d450818d6a))

### [4.4.1](https://github.com/jwplayer/ott-web-app/compare/v4.4.0...v4.4.1) (2023-03-29)


### Bug Fixes

* content protection multiple configs issue ([d6fffd2](https://github.com/jwplayer/ott-web-app/commit/d6fffd2089fcf4c4459757fb80be7914ab39b73d))
* not needed check ([6ea6574](https://github.com/jwplayer/ott-web-app/commit/6ea65747604539580852c1e870595fd0387c5ed4))
* signing enabled condition ([7bbfa96](https://github.com/jwplayer/ott-web-app/commit/7bbfa96bda48adba56c18e1984741db0959fd88d))
* use content protection tweaks ([4e03197](https://github.com/jwplayer/ott-web-app/commit/4e03197ac5e5410405a432c54df6153cfd697bdc))

## [4.4.0](https://github.com/jwplayer/ott-web-app/compare/v4.3.0...v4.4.0) (2023-03-28)


### Features

* add player license key param / setting ([d7f5567](https://github.com/jwplayer/ott-web-app/commit/d7f5567d33696e663312e9710913d2997f79525c))

## [4.3.0](https://github.com/jwplayer/ott-web-app/compare/v4.2.3...v4.3.0) (2023-03-23)


### Features

* **project:** jwp signging service ([9b1030d](https://github.com/jwplayer/ott-web-app/commit/9b1030d9e999cf9852485eff252958fc8bfd91f5))


### Bug Fixes

* player container error ([d44493c](https://github.com/jwplayer/ott-web-app/commit/d44493c48526ae02485a1a9e289b9347392a3687))

### [4.2.3](https://github.com/jwplayer/ott-web-app/compare/v4.2.2...v4.2.3) (2023-03-14)


### Bug Fixes

* e2e date locale problem ([08dff6a](https://github.com/jwplayer/ott-web-app/commit/08dff6a14099b869d8ef082271767b1a8c405daa))
* refactor the condition ([d69bfed](https://github.com/jwplayer/ott-web-app/commit/d69bfed8d84b040acad9d12d053786c199252a49))
* single watch history item bug ([88946a4](https://github.com/jwplayer/ott-web-app/commit/88946a4ee4aa91d0469e818e0c4fb2e3d22de40b))

### [4.2.2](https://github.com/jwplayer/ott-web-app/compare/v4.2.1...v4.2.2) (2023-02-21)


### Bug Fixes

* fully replace inplayer integration key with jwp ([#250](https://github.com/jwplayer/ott-web-app/issues/250)) ([e1005f3](https://github.com/jwplayer/ott-web-app/commit/e1005f31b1ef2a5026fe1f2422caef8f95cd2e98))

### [4.2.1](https://github.com/jwplayer/ott-web-app/compare/v4.2.0...v4.2.1) (2023-02-20)


### Bug Fixes

* **project:** avod as a default model ([f3096ed](https://github.com/jwplayer/ott-web-app/commit/f3096ed4e43bf552bf11bf758c484b19f777bec0))

## [4.2.0](https://github.com/jwplayer/ott-web-app/compare/v4.1.1...v4.2.0) (2023-02-10)


### Features

* **project:** remove enable_text setting ([345a118](https://github.com/jwplayer/ott-web-app/commit/345a11858f19c98951e68173743122962b962e89))

### [4.1.1](https://github.com/jwplayer/ott-web-app/compare/v4.1.0...v4.1.1) (2023-02-09)


### Bug Fixes

* broken screens when access is granted from dashboard ([db8f413](https://github.com/jwplayer/ott-web-app/commit/db8f41361f61846c4d48c9f3f19d3c12dfb83b0d))

## [4.1.0](https://github.com/jwplayer/ott-web-app/compare/v4.0.1...v4.1.0) (2023-02-01)


### Features

* **playlist:** add additional images webp format support ([579cd0c](https://github.com/jwplayer/ott-web-app/commit/579cd0cde5d8c48933867ef3371e542252bdbbb7))

### [4.0.1](https://github.com/jwplayer/ott-web-app/compare/v4.0.0...v4.0.1) (2023-01-31)


### Bug Fixes

* **playlist:** fix empty recommendations ([0d31f4e](https://github.com/jwplayer/ott-web-app/commit/0d31f4eb7a5dbf57b86fbfeaf76d49156fcd0859))

## [4.0.0](https://github.com/jwplayer/ott-web-app/compare/v3.4.0...v4.0.0) (2023-01-30)


### ⚠ BREAKING CHANGES

* add JWP authentication, payments, and subscriptions with docs (bump version)
* add JWP authentication, payments, and subscriptions with docs
* add JWP powered auth, payments, and subscriptions
* JWP powered auth, payments, and subscriptions

### Features

* add JWP authentication, payments, and subscriptions with docs ([97f6451](https://github.com/jwplayer/ott-web-app/commit/97f64513439a193e189b3f6082e7bb04682c56b1))
* add JWP authentication, payments, and subscriptions with docs (bump version) ([a3e2a08](https://github.com/jwplayer/ott-web-app/commit/a3e2a080df10a911c0518629924612ad2655e047))
* add JWP powered auth, payments, and subscriptions ([9ce1e59](https://github.com/jwplayer/ott-web-app/commit/9ce1e5929278fd438fbd957a10d105a789b52a4f))
* JWP powered auth, payments, and subscriptions ([4b4f211](https://github.com/jwplayer/ott-web-app/commit/4b4f21128fc8de08f5239d7be72e3092a45383ef))

## [3.4.0](https://github.com/jwplayer/ott-web-app/compare/v3.3.0...v3.4.0) (2023-01-27)


### Features

* **project:** enableSharing toggled on by default ([6367493](https://github.com/jwplayer/ott-web-app/commit/636749324869f524cc64649863d492e3f8c68a48))

## [3.3.0](https://github.com/jwplayer/ott-web-app/compare/v3.2.2...v3.3.0) (2023-01-25)


### Features

* **player:** update player settings ([1733977](https://github.com/jwplayer/ott-web-app/commit/1733977a06cbfeef97a4cbd54d46235bf3339079))

### [3.2.2](https://github.com/jwplayer/ott-web-app/compare/v3.2.1...v3.2.2) (2023-01-24)


### Bug Fixes

* **deps:** bump json5 from 1.0.1 to 1.0.2 ([#228](https://github.com/jwplayer/ott-web-app/issues/228)) ([ee25be3](https://github.com/jwplayer/ott-web-app/commit/ee25be32266c36e460cb67a7549d8786aa783b91))

### [3.2.1](https://github.com/jwplayer/ott-web-app/compare/v3.2.0...v3.2.1) (2023-01-18)


### Bug Fixes

* doc updates for modes and minor file reorg ([d9c7e8f](https://github.com/jwplayer/ott-web-app/commit/d9c7e8f5f2739173dc23357aa78196178c944297))

## [3.2.0](https://github.com/jwplayer/ott-web-app/compare/v3.1.1...v3.2.0) (2023-01-18)


### Features

* **project:** remove posterFading, shelfTitles and dynamicBlur settings ([9b3a315](https://github.com/jwplayer/ott-web-app/commit/9b3a3153dd4eeac727a4c55cb57b3ab5d8ad78f1))

### [3.1.1](https://github.com/jwplayer/ott-web-app/compare/v3.1.0...v3.1.1) (2023-01-12)


### Bug Fixes

* **player:** hide inside player title and description ([84dae80](https://github.com/jwplayer/ott-web-app/commit/84dae80ece60324887a2e1fbbc20a2821f05d85e))

## [3.1.0](https://github.com/jwplayer/ott-web-app/compare/v3.0.2...v3.1.0) (2023-01-11)


### Features

* **project:** add default player ID to the .env ([1c15875](https://github.com/jwplayer/ott-web-app/commit/1c158756d6c78598cada6af48a910b60e8a2cd06))
* **project:** add default_player_id to config.ts ([fac3038](https://github.com/jwplayer/ott-web-app/commit/fac3038c8376c2a37879fcfd6e6303f9b89e7947))
* **project:** remove deprecated app config props ([b6bb06f](https://github.com/jwplayer/ott-web-app/commit/b6bb06f17b32863f5406908d46429ed511bd6ff8))
* **project:** remove player entry from the docs ([e53aa38](https://github.com/jwplayer/ott-web-app/commit/e53aa3867d14c8ac75ef58cf82d62b66ec2a92fe))
* **project:** Update .env ([5dc107f](https://github.com/jwplayer/ott-web-app/commit/5dc107f70fde901c73d96427d735e78b1bd94986))

### [3.0.2](https://github.com/jwplayer/ott-web-app/compare/v3.0.1...v3.0.2) (2022-12-27)


### Bug Fixes

* **inlineplayer:** display correct video title after play next clicked BC-229 ([bffc1d9](https://github.com/jwplayer/ott-web-app/commit/bffc1d91d8b808f015f4208d1d7825259cac6b89))

### [3.0.1](https://github.com/jwplayer/ott-web-app/compare/v3.0.0...v3.0.1) (2022-12-22)


### Bug Fixes

* **auth:** check the free value ([e4b233c](https://github.com/jwplayer/ott-web-app/commit/e4b233c6a09900291a8313207ff5de0697408e51))
* **auth:** check the requiresSubscription value ([a878ab6](https://github.com/jwplayer/ott-web-app/commit/a878ab6ca48e8652777da4fc31bb8a5adb5c25ac))
* **auth:** check the requiresSubscription value ([5ad9f30](https://github.com/jwplayer/ott-web-app/commit/5ad9f3091f46478629ddf0b0ae526f5dc798e517))

## [3.0.0](https://github.com/jwplayer/ott-web-app/compare/v2.9.1...v3.0.0) (2022-12-14)


### ⚠ BREAKING CHANGES

* introduce InPlayer services

### Features

* InPlayer register and update user flows ([#202](https://github.com/jwplayer/ott-web-app/issues/202)) ([489d8e8](https://github.com/jwplayer/ott-web-app/commit/489d8e8a6fb358df8dbd4522aed69228ded1bf6e))

### [2.9.1](https://github.com/jwplayer/ott-web-app/compare/v2.9.0...v2.9.1) (2022-12-14)


### Bug Fixes

* replace custom sw with vite, fix caching ([#207](https://github.com/jwplayer/ott-web-app/issues/207)) ([ef6e9f9](https://github.com/jwplayer/ott-web-app/commit/ef6e9f99493205367d0468b7856c10ad3bf4bb0e))

## [2.9.0](https://github.com/jwplayer/ott-web-app/compare/v2.8.0...v2.9.0) (2022-12-05)


### Features

* inplayer authentication ([f1922e4](https://github.com/jwplayer/ott-web-app/commit/f1922e4f95f92e76b5dca9b5a95291029a605573))


### Bug Fixes

* inplayer in service ([57757e9](https://github.com/jwplayer/ott-web-app/commit/57757e9e0f0683455ceea515dbe3811699b0f992))
* refactor inplayer approach ([4d327b6](https://github.com/jwplayer/ott-web-app/commit/4d327b6ee0ee7cf39cff2f8d518861de5ab907fc))

## [2.8.0](https://github.com/jwplayer/ott-web-app/compare/v2.7.1...v2.8.0) (2022-12-01)


### Features

* replace compile constants with ini files ([158079d](https://github.com/jwplayer/ott-web-app/commit/158079d58283951e809a262f0f80b0a8adc630be))

### [2.7.1](https://github.com/jwplayer/ott-web-app/compare/v2.7.0...v2.7.1) (2022-11-28)


### Bug Fixes

* build improvements, code cleanup, small improvements, test fixes ([8891cee](https://github.com/jwplayer/ott-web-app/commit/8891cee95f425cba7a8e68fd3f1693a90eb65182))

## [2.7.0](https://github.com/jwplayer/ott-web-app/compare/v2.6.2...v2.7.0) (2022-11-17)


### Features

* add demo dialog when no config ID ([c6de430](https://github.com/jwplayer/ott-web-app/commit/c6de430412332bd722e8bab263cd755db4a8bfbc))

### [2.6.2](https://github.com/jwplayer/ott-web-app/compare/v2.6.1...v2.6.2) (2022-10-12)


### Bug Fixes

* fix the changelog path in the release template ([229fa55](https://github.com/jwplayer/ott-web-app/commit/229fa553e4f3656e9fa8e8c424610c0675b24d29))

### [2.6.1](https://github.com/jwplayer/ott-web-app/compare/v2.6.0...v2.6.1) (2022-10-12)


### Bug Fixes

* trivial doc change to test release action ([09062b6](https://github.com/jwplayer/ott-web-app/commit/09062b62e9144d11121c4eed9d6fb95ac5c8d2db))

## [2.6.0](https://github.com/jwplayer/ott-web-app/compare/v2.5.0...v2.6.0) (2022-10-12)


### Features

* **inlineplayer:** add inline player support ([159d135](https://github.com/jwplayer/ott-web-app/commit/159d1357033e3755008d7b137fd5f0e23521712a))
* **project:** add static page ([84d21bf](https://github.com/jwplayer/ott-web-app/commit/84d21bfc47ace24e8f1fe0396336be4561a4bf3e))
* **project:** add support for custom screens ([77b264c](https://github.com/jwplayer/ott-web-app/commit/77b264c4526b44d27d40ea62028d3f659ebd8529))
* **project:** support alternate images ([e81f491](https://github.com/jwplayer/ott-web-app/commit/e81f491ace05c76eb0a3b432ad8d4edf0dfde417))
* **project:** update react-router to 6.4.0 ([0631763](https://github.com/jwplayer/ott-web-app/commit/0631763362c3f184870f0375980c1e40367b3164))
* remove virtualized and add aspect ratio support ([d42f9fc](https://github.com/jwplayer/ott-web-app/commit/d42f9fc3ffe660ff37b06b264b6f8a1e06be5270))


### Bug Fixes

* **home:** shelf e2e test for mobile ([35ff1f1](https://github.com/jwplayer/ott-web-app/commit/35ff1f15295177e38192f81c8429c02c50a87692))
* **inlineplayer:** inline layout UI and a11y fixes ([71c9666](https://github.com/jwplayer/ott-web-app/commit/71c966685461ef36e94823a85058dea83fc44ecd))
* **project:** error when assets.banner is null ([#180](https://github.com/jwplayer/ott-web-app/issues/180)) ([cd80916](https://github.com/jwplayer/ott-web-app/commit/cd80916892b6351345fe7c05251097375272cdf7)), closes [#179](https://github.com/jwplayer/ott-web-app/issues/179)
* **project:** fix missing shelves and cards ([e490487](https://github.com/jwplayer/ott-web-app/commit/e490487b61624f015bf1bbb79cc933a515acd9ac))
* **project:** home button always in active state ([3141fe3](https://github.com/jwplayer/ott-web-app/commit/3141fe32cae3c4649357eed53c56fa7e5e0205c2))
* **project:** player fixes and UI improvements ([5670fd8](https://github.com/jwplayer/ott-web-app/commit/5670fd84f59a6329e9079cb8acd1596d407990f2))
* search route without path and stale debounce ([bebd490](https://github.com/jwplayer/ott-web-app/commit/bebd490157e1eed4d973e4e58fd83655625a9090))
* styling bug fixes ([#176](https://github.com/jwplayer/ott-web-app/issues/176)) ([ef57976](https://github.com/jwplayer/ott-web-app/commit/ef5797687da3d24c158ae9454736d89b8df56333))

## [2.5.0](https://github.com/jwplayer/ott-web-app/compare/v2.4.2...v2.5.0) (2022-08-05)


### Features

* **epg:** add epg component and live channel and schedule support ([3c84877](https://github.com/jwplayer/ott-web-app/commit/3c84877316f82fd165e368c24e2b4e92c7dd07ce))

### [2.4.2](https://github.com/jwplayer/ott-web-app/compare/v2.4.1...v2.4.2) (2022-07-19)


### Bug Fixes

* **project:** assets object not required anymore ([d17f6e4](https://github.com/jwplayer/ott-web-app/commit/d17f6e4781ade0808921931aef094d6adf274849))

### [2.4.1](https://github.com/jwplayer/ott-web-app/compare/v2.4.0...v2.4.1) (2022-07-18)


### Bug Fixes

* **project:** bug fixes after preview check ([3e8a0df](https://github.com/jwplayer/ott-web-app/commit/3e8a0df1ebbd7963632302bc8d0974230bd3e611))

## [2.4.0](https://github.com/jwplayer/ott-web-app/compare/v2.3.0...v2.4.0) (2022-07-18)


### Features

* **series:** add new series-api ([29e8599](https://github.com/jwplayer/ott-web-app/commit/29e8599a57a2fa2498022d2e03e4055202375c7d))

## [2.3.0](https://github.com/jwplayer/ott-web-app/compare/v2.2.0...v2.3.0) (2022-07-11)


### Features

* **config:** add dynamic config options at build ([6520ad0](https://github.com/jwplayer/ott-web-app/commit/6520ad0bb23d562a000c18bffa1fa1bfb857ba38))

## [2.2.0](https://github.com/jwplayer/ott-web-app/compare/v2.1.0...v2.2.0) (2022-07-08)


### Features

* **project:** sanitize html content ([658f199](https://github.com/jwplayer/ott-web-app/commit/658f1993d198c51eef24ba47b86c5786a5ee6560)), closes [#47](https://github.com/jwplayer/ott-web-app/issues/47)

## [2.1.0](https://github.com/jwplayer/ott-web-app/compare/v2.0.4...v2.1.0) (2022-07-05)


### Features

* **project:** support watchlists ([e71e6b4](https://github.com/jwplayer/ott-web-app/commit/e71e6b4d51a0f03d7e79376ff69c5c1ba47a5d53))
* **project:** support watchlists ([bff95ab](https://github.com/jwplayer/ott-web-app/commit/bff95ab6729ab2f0b3bc945ef3e76431c205c859))
* **project:** support watchlists ([b506b52](https://github.com/jwplayer/ott-web-app/commit/b506b5297f2f5d56b679c7768d70000192fcd5e0))
* **project:** support watchlists ([0124428](https://github.com/jwplayer/ott-web-app/commit/0124428cc52ed623750eeee40bd9d2c62c4031f8))

### [2.0.4](https://github.com/jwplayer/ott-web-app/compare/v2.0.3...v2.0.4) (2022-06-30)


### Bug Fixes

* **project:** docs link fixed ([a64587a](https://github.com/jwplayer/ott-web-app/commit/a64587ab78f86c82a3c06452be2e4ad9c370cbc8))

### [2.0.3](https://github.com/jwplayer/ott-web-app/compare/v2.0.2...v2.0.3) (2022-06-21)


### Bug Fixes

* **playlist:** smooth transition on hover ([0ab070f](https://github.com/jwplayer/ott-web-app/commit/0ab070ff7a36a2498caf562a3fafc63c6f534e68))

### [2.0.2](https://github.com/jwplayer/ott-web-app/compare/v2.0.1...v2.0.2) (2022-06-08)


### Bug Fixes

* add docs for versioning and test changelog ([#80](https://github.com/jwplayer/ott-web-app/issues/80)) ([cc3695d](https://github.com/jwplayer/ott-web-app/commit/cc3695d9ee30b759001671460a407d7d70e218fc))
* test version bump ([716b289](https://github.com/jwplayer/ott-web-app/commit/716b289f0780964c2b0954b17e59456952dad9d2))
* update docs and test version bump ([cfa4b2d](https://github.com/jwplayer/ott-web-app/commit/cfa4b2d09b7b963c93a4815526071d68e28083cc))

### [2.0.1](https://github.com/jwplayer/ott-web-app/compare/v2.0.0...v2.0.1) (2022-06-07)


### Bug Fixes

* use action token for version bump workflow ([50e95c8](https://github.com/jwplayer/ott-web-app/commit/50e95c8bf9682d52730c8654baac3efbabe3c3b9))

## [2.0.0](https://github.com/jwplayer/ott-web-app/compare/v2.0.0-alpha...v2.0.0) (2022-06-03)


### Features

* **auth:** reload subscriptions, transactions and payment parallel ([8b526b0](https://github.com/jwplayer/ott-web-app/commit/8b526b0cb8dbf6d1af8c4a21061dd3cf5728fd6b))
* **entitlement:** add tvod entitlement check to movie screen ([5c5e388](https://github.com/jwplayer/ott-web-app/commit/5c5e3886360ad7e6da01a9401ca98ccc1d71a8f4))
* **entitlement:** prevent UI blocking while loading auth or subscriptions ([fefab30](https://github.com/jwplayer/ott-web-app/commit/fefab30aaa7f6b90855d54c0ccda11f4ca0d4316))
* **payment:** add tvod to checkout ([c92bb15](https://github.com/jwplayer/ott-web-app/commit/c92bb15d51c580fb6b76089ede200236724edf4e))
* **payment:** add tvods to choose offer modal ([bc8e6d7](https://github.com/jwplayer/ott-web-app/commit/bc8e6d7efde7b1e7b05371f6cbdddf2010b59fed))
* **payment:** implement  authvod + tvod ([836e457](https://github.com/jwplayer/ott-web-app/commit/836e4574e47192d4f88ee91f178386f3e06f96ff))
* **payment:** update choose offer modal title and subtitle ([a474b2a](https://github.com/jwplayer/ott-web-app/commit/a474b2a1f213022f5b0effee955174d8210c8538))
* **project:** add Zustand dependency ([ed9968e](https://github.com/jwplayer/ott-web-app/commit/ed9968ee570a7976c81bd5ba1376d6ff6731eca2))
* **project:** cache media items from playlists ([2b8b5ee](https://github.com/jwplayer/ott-web-app/commit/2b8b5eeadaceb41a029a83548b057cab2694f85a))
* **signing:** add playlist and media entitlement using a service ([e93a655](https://github.com/jwplayer/ott-web-app/commit/e93a655ca23aa1ece62b0ade81b92612c81e5cdd))
* Update config to support new schema ([#71](https://github.com/jwplayer/ott-web-app/issues/71)) ([f8cf652](https://github.com/jwplayer/ott-web-app/commit/f8cf652f70b9ff9b42812259e965e1cb90d9c408))
* **videodetail:** add tvod entitlement to series screen ([b3df73e](https://github.com/jwplayer/ott-web-app/commit/b3df73e4fb8acf95e346091be263774437c22b1f))


### Bug Fixes

* **auth:** clear subscription, transactions and payment after logout ([d977dcc](https://github.com/jwplayer/ott-web-app/commit/d977dccb3946f6abbe9e283c4ee62cfa4677b198))
* **auth:** prevent login error when watch history item is removed ([cfc82ec](https://github.com/jwplayer/ott-web-app/commit/cfc82ec0f393cbc11c19f075fa1b09e3a19dafce))
* **entitlement:** improve entitlement mechanism ([4a7cba7](https://github.com/jwplayer/ott-web-app/commit/4a7cba7b7b9b4002c48d12344ac38e3174abe717))
* **payment:** clear the order after closing the checkout modal ([3f590d7](https://github.com/jwplayer/ott-web-app/commit/3f590d76e1226926d483b77d923af590b20f5fdb))
* **payment:** fix incorrect svod redirect ([cf3bd7d](https://github.com/jwplayer/ott-web-app/commit/cf3bd7da9d76d7ecd34cd576605704c140500fbe))
* **payment:** fix offer not always being selected ([23c67c2](https://github.com/jwplayer/ott-web-app/commit/23c67c23d045274312edda75fe7e112cd4ae94c1))
* **payment:** show offer modal after registration in authvod platform ([0071c63](https://github.com/jwplayer/ott-web-app/commit/0071c638c7580cd91c3e949827522648341253cf))
* **payment:** tvod checkout fixes for authvod platform ([31325e4](https://github.com/jwplayer/ott-web-app/commit/31325e420c07609c81d6874220dfc84ad9b61023))
* react query staleTime wrong value ([020a06a](https://github.com/jwplayer/ott-web-app/commit/020a06a87139acc67c6e7c044955a91f425b80d7))
* **series:** fix start watching button url ([833c364](https://github.com/jwplayer/ott-web-app/commit/833c364d0695ee727aeae718ca2f07eb1d28279e))
* **signing:** prevent signing when DRM is disabled ([0d70e99](https://github.com/jwplayer/ott-web-app/commit/0d70e994edcce17b5ef22d2a0c38120fd22e4029))
* upgrade packages to resolve vulnerabilities ([#53](https://github.com/jwplayer/ott-web-app/issues/53)) ([c2d1efc](https://github.com/jwplayer/ott-web-app/commit/c2d1efcc7390ff2a4961eac59415696259d1d29d))
* **user:** show payments menu in authvod access model ([6e2671a](https://github.com/jwplayer/ott-web-app/commit/6e2671a4f082d93152addf87a5a4222622c67383))
* **videodetail:** prevents flash when navigating to movie page ([9c320bc](https://github.com/jwplayer/ott-web-app/commit/9c320bc9b27b08d078cdbfc4e125a2e357bc3f69))

## [2.0.0-alpha](https://github.com/jwplayer/ott-web-app/compare/v1.1.1...v2.0.0-alpha) (2022-05-06)


### Features

* **auth:** add backdrop click to login codecept test ([9a29722](https://github.com/jwplayer/ott-web-app/commit/9a29722eddbe8eb513c0094bc780969bccbf0b74))
* **auth:** add login codecept tests ([1d74a18](https://github.com/jwplayer/ott-web-app/commit/1d74a18ce280c6162cb99102caf6b5fe1a7a413f))
* **auth:** add register codecept tests ([b4bc475](https://github.com/jwplayer/ott-web-app/commit/b4bc475aafa39059ba31da9cce851266e1500d88))
* **home:** add codecept tests ([5f6c38d](https://github.com/jwplayer/ott-web-app/commit/5f6c38db0317ef70a1ccd9b8b50c6a48fe122705))
* **project:** add github pages deployment ([8484572](https://github.com/jwplayer/ott-web-app/commit/8484572d8f6662ae29eb525addbf4b62e9381e06))
* **project:** add not found pages and 404.html for github pages ([3249d63](https://github.com/jwplayer/ott-web-app/commit/3249d633ab75971c7720c180e1762553d5f70f9e))
* **project:** hash based router for github pages ([2250f33](https://github.com/jwplayer/ott-web-app/commit/2250f33eebd78ecbe861928db0df8e8e67bda0d5))
* **user:** add account codecept test ([f7e9395](https://github.com/jwplayer/ott-web-app/commit/f7e93959011990f9af8845d2418196fdff9d39c9))
* **user:** add payments codecept tests ([70521df](https://github.com/jwplayer/ott-web-app/commit/70521dfd7d72c72c87e6e324fd640c3d1b9506d2))
* **videodetail:** add codecept tests ([5fd6931](https://github.com/jwplayer/ott-web-app/commit/5fd6931762cd4d5bf8a972d4f054dbdf215beef7))
* **watchhistory:** add codecept test ([120055f](https://github.com/jwplayer/ott-web-app/commit/120055f1fd31a1884fd552f44933a5880e53364b))
* **watchhistory:** add mobile codecept test and login step ([1467b44](https://github.com/jwplayer/ott-web-app/commit/1467b44d6a67d7fd4cd0db36fefa520cac48a289))


### Bug Fixes

* **auth:** fix console error controlled checkbox ([b4f9379](https://github.com/jwplayer/ott-web-app/commit/b4f93793c8e36d6883e1365a4517e5542f000842))
* **auth:** fix console errors ([e293764](https://github.com/jwplayer/ott-web-app/commit/e293764868a5080260cabdb9a8947e5faf88f2e6))
* **auth:** Make logout into a function ([#48](https://github.com/jwplayer/ott-web-app/issues/48)) ([97940a0](https://github.com/jwplayer/ott-web-app/commit/97940a08c76e34d999e71105834c5ac8bfe58d13))
* **auth:** prevent content shift when checking checkbox ([72ea3f6](https://github.com/jwplayer/ott-web-app/commit/72ea3f69c5bf2caee4524eb3356db17a2e7bf463))
* **e2e:** fix watchlist flaky test ([#50](https://github.com/jwplayer/ott-web-app/issues/50)) ([1974614](https://github.com/jwplayer/ott-web-app/commit/197461471b2bcd2b60aa33cc091e716c4c98e938))
* **payment:** fix Adyen form label styling ([b4f48c6](https://github.com/jwplayer/ott-web-app/commit/b4f48c64d39f989674dcf514a75c94b0492fa20b))
* **payment:** fix Adyen live environment when cleengSandbox is set to false ([4ff1e42](https://github.com/jwplayer/ott-web-app/commit/4ff1e42dd34db460a88e507f8051e1d774bceab7))
* **player:** fix autoplay ([3e7d7b4](https://github.com/jwplayer/ott-web-app/commit/3e7d7b4c6157d598b2e52c9d5534de67ed2f1eb9))
* **project:** fix DateField react error ([631e932](https://github.com/jwplayer/ott-web-app/commit/631e9327c72244b6fc43548e8cdcab08276c5bb0))
* **project:** fix for custom domains base url ([2426b27](https://github.com/jwplayer/ott-web-app/commit/2426b2770e8615af2edfbcc2d3a8b7c5bd03b08e))
* **project:** fix getPublicUrl for dev builds ([ec9bc60](https://github.com/jwplayer/ott-web-app/commit/ec9bc605242b51c336da128c0af1d81bf2184154))
* **project:** use json property from description blob ([c1c0fee](https://github.com/jwplayer/ott-web-app/commit/c1c0feeb3a78833ea2c03b38573b83b7fc37fdc7))
* remove unfinished mutations for consents and customer data and move logic to account store ([#17](https://github.com/jwplayer/ott-web-app/issues/17)) ([4a75628](https://github.com/jwplayer/ott-web-app/commit/4a75628c927161ef195b93743a2796e59b068285))

### [1.1.1](https://github.com/jwplayer/ott-web-app/compare/v1.1.0...v1.1.1) (2021-08-06)


### Bug Fixes

* **auth:** fix checkbox color on Firefox ([ee49664](https://github.com/jwplayer/ott-web-app/commit/ee496648fb211372a026db9aea20728d7909ec17))
* **auth:** fix default option for required dropdown ([fab40d5](https://github.com/jwplayer/ott-web-app/commit/fab40d51c5e1ac2c36a8ad4811f4edb4ac02f85e))
* **project:** add spacing between search input and user menu icon ([de99481](https://github.com/jwplayer/ott-web-app/commit/de99481e64bb0a5ce1b2df547e14e1b6c43fe915))
* **project:** fix header logo and search alignment ([5ec7522](https://github.com/jwplayer/ott-web-app/commit/5ec75224e005ea2683b3701598f4a3d1b3360a9b))
* **project:** set checkbox color to config highlight ([c097da5](https://github.com/jwplayer/ott-web-app/commit/c097da59cd13e33f4b36b29869a41bbd9c522e59))

## [1.1.0](https://github.com/jwplayer/ott-web-app/compare/v1.0.0...v1.1.0) (2021-08-05)


### Features

* **auth:** add account service and store ([84a3687](https://github.com/jwplayer/ott-web-app/commit/84a3687f40ed6da698a035a1f5b4863ab56f87ee))
* **auth:** add AccountModal base and login button ([92fb23a](https://github.com/jwplayer/ott-web-app/commit/92fb23a5a763e054a5014903da1588a6e568d899))
* **auth:** add checkout form ([a1075d6](https://github.com/jwplayer/ott-web-app/commit/a1075d660d8dc0b0e3e59589714aeee5c3b876ab))
* **auth:** add ChooseOfferForm ([2f75031](https://github.com/jwplayer/ott-web-app/commit/2f750314ba3ff021361fbf1646ee2c5cf48aad90))
* **auth:** add LoginForm component ([dbdb875](https://github.com/jwplayer/ott-web-app/commit/dbdb875c9c3f508f72985069927e88abd53fcef3))
* **auth:** add sign up link in login form ([b774a42](https://github.com/jwplayer/ott-web-app/commit/b774a42a00a70cea5242f0deffed6536ddc2567e))
* **auth:** connect login form with MediaStore API ([8dc53e9](https://github.com/jwplayer/ott-web-app/commit/8dc53e9b27898634cbe9b07de8456913d839bba0))
* **auth:** handle refresh token error ([7a4a9eb](https://github.com/jwplayer/ott-web-app/commit/7a4a9ebd4c53b1565c24031cbdbc6bcadd87fcd3))
* **auth:** implement cancel subscription flow ([2fef77f](https://github.com/jwplayer/ott-web-app/commit/2fef77fc6c750c07240ac5d5750a50deaa928c4f))
* **auth:** implement renew subscription flow ([ccd6e4d](https://github.com/jwplayer/ott-web-app/commit/ccd6e4db8c318b72adc3a74af642ba52e0455eeb))
* **auth:** make Modal component more generic ([9474f87](https://github.com/jwplayer/ott-web-app/commit/9474f8725809535e1cbf1c3ec4fe0b7f2f200229))
* **auth:** restore user session from local storage ([a04b15e](https://github.com/jwplayer/ott-web-app/commit/a04b15efb50aa8e0af8c7b1da5b092a481f18755))
* **auth:** skip personal details when optional ([4d676a9](https://github.com/jwplayer/ott-web-app/commit/4d676a9fe779116ba031553811f3f2a13412e902))
* **auth:** update AccountStore with modal state ([db2db50](https://github.com/jwplayer/ott-web-app/commit/db2db50f185fd911241dc0a11b82ddcc30e02098))
* **auth:** use routing for the AccountModal ([02fc5e2](https://github.com/jwplayer/ott-web-app/commit/02fc5e27026df551bd1651332eb1e25208f13c4e))
* **favorites:** add favorites to account ([f42599e](https://github.com/jwplayer/ott-web-app/commit/f42599e43d5e602558d9719dd6e6599385473107))
* **home:** add pagination dots to feature shelf ([0317426](https://github.com/jwplayer/ott-web-app/commit/03174265c8a7531917fbeaad9ffe1c2f824c5263))
* **menu:** add popover component ([9324f09](https://github.com/jwplayer/ott-web-app/commit/9324f09514a454ccfac55673a35db25e68f53f2d))
* **menu:** add usermenu component ([101f4f9](https://github.com/jwplayer/ott-web-app/commit/101f4f9b78311c8100f3c760cfa074e2fe9bb39c))
* **menu:** add usermenu to header ([735fb45](https://github.com/jwplayer/ott-web-app/commit/735fb457770a863700f79d48aee11d88af5b04c1))
* **menu:** add usermenu to sidebar ([51a1783](https://github.com/jwplayer/ott-web-app/commit/51a1783f975abc2b61e360345865b8df93c340fc))
* **payment:** add checkout welcome component ([9ba4589](https://github.com/jwplayer/ott-web-app/commit/9ba4589f9e1480987c1046324ded8eb36799a745))
* **payment:** implement Adyen and PayPal payment methods ([b6570fa](https://github.com/jwplayer/ott-web-app/commit/b6570faee70531a4d014b818bf2727262e45d9c0))
* **player:** add save to watchhistory on pause ([403671a](https://github.com/jwplayer/ott-web-app/commit/403671ac39831f4f00159fde809914c817867a2a))
* **player:** use playlist item in player config ([5ee0a59](https://github.com/jwplayer/ott-web-app/commit/5ee0a5902970af6103e99b7dfaf4e238b9441083))
* **project:** add checkbox component ([5eb48f5](https://github.com/jwplayer/ott-web-app/commit/5eb48f50737c1e48731db6e18ce8debfd790f0e1))
* **project:** add datefield component ([6a6aedc](https://github.com/jwplayer/ott-web-app/commit/6a6aedc0f6f0d8b257b945595f5fe412ac2af8bb))
* **project:** add detect outsideclick component ([8fb1cd3](https://github.com/jwplayer/ott-web-app/commit/8fb1cd3889be557a00dffe09ac3428bcd2949167))
* **project:** add header to checkbox ([23e2ef3](https://github.com/jwplayer/ott-web-app/commit/23e2ef3db38a800c95dd71b0eb1acb8b0d1f12b4))
* **project:** add loadingoverlay to all forms ([3ba922a](https://github.com/jwplayer/ott-web-app/commit/3ba922afbfcf946210e0ea952884c09c60c5ae8d))
* **project:** add password strength component ([dc80d85](https://github.com/jwplayer/ott-web-app/commit/dc80d85b0b3acdb56175fd189fe0f7fe7a936ef1))
* **project:** add paywall lock icon to shelf/grid items ([345ac68](https://github.com/jwplayer/ott-web-app/commit/345ac68ec15bd1df6400f03dee22338dc35394bd))
* **project:** add radio component ([2d101bd](https://github.com/jwplayer/ott-web-app/commit/2d101bd1c523834ca02398d8e648bddb1fc0b298))
* **project:** add slide from right to animation ([a65552b](https://github.com/jwplayer/ott-web-app/commit/a65552bdb3e12a53f0316f63e32c61558b9e147a))
* **project:** add static page ([db0fb6a](https://github.com/jwplayer/ott-web-app/commit/db0fb6a9974f607f4b7a93541e4e870cb126275e))
* **project:** add support for left and right control to TextField ([5926efd](https://github.com/jwplayer/ott-web-app/commit/5926efd1971a1ca135ce1b8405c63c2abc598ea2))
* **project:** add terms conditions url to config ([d9cc77a](https://github.com/jwplayer/ott-web-app/commit/d9cc77af119b07159f14911334041a798a46cab9))
* **project:** add TextField component ([6c6efa0](https://github.com/jwplayer/ott-web-app/commit/6c6efa01e94f261a482392ba09005ab5ac08af15))
* **project:** add width and height to logo img ([df27e8e](https://github.com/jwplayer/ott-web-app/commit/df27e8ec2f24e945572ee8904da943dfe08327a5))
* **project:** add yupschema creator ([807a981](https://github.com/jwplayer/ott-web-app/commit/807a9816921522c67fe79a1b81ce8564d3f9eeea))
* **project:** added cleengutil for cleengcapture ([636e47c](https://github.com/jwplayer/ott-web-app/commit/636e47ccb6a65019639c58da74cdd0410917abd3))
* **project:** implement logout ([2e920eb](https://github.com/jwplayer/ott-web-app/commit/2e920ebea8f3a3ac31322f23611485189a175c26))
* **project:** limit playlists item to 25 ([58c9560](https://github.com/jwplayer/ott-web-app/commit/58c95604c0b977d1dca175e81b8d4cce4433812c))
* **project:** set default QueryProvider options ([cd7f93a](https://github.com/jwplayer/ott-web-app/commit/cd7f93ae1afd9ab4f67425f1e665cb4aa17917f7))
* **project:** update banner, icons and manifest ([b31a82a](https://github.com/jwplayer/ott-web-app/commit/b31a82aa22dff0268c6b5cc86c98591eab5e1a3a))
* **project:** update popover and close UserMenu after click ([a6d7d67](https://github.com/jwplayer/ott-web-app/commit/a6d7d675c1007b15fcc55444507cd45f75570d3c))
* **user:** add confirmation dialog before clearing the favorites ([b075697](https://github.com/jwplayer/ott-web-app/commit/b07569725375d6c22b5eb1836981e76f675ffa68))
* **user:** add consent validation ([497bd49](https://github.com/jwplayer/ott-web-app/commit/497bd49c0af6f9cece9a85f31a2e13f2b4523859))
* **user:** add edit password form ([5773cca](https://github.com/jwplayer/ott-web-app/commit/5773cca0ad114912ddabd5509d3904bc35d50a20))
* **user:** add favorites screen ([7f94e98](https://github.com/jwplayer/ott-web-app/commit/7f94e98a37222ce0b62e94a56c7ca65f952bb184))
* **user:** add forgot password form ([86c75ab](https://github.com/jwplayer/ott-web-app/commit/86c75abfbfea2ab33c56350a68ba56eecd24e3e7))
* **user:** add form component and implement to user screen ([d270d93](https://github.com/jwplayer/ott-web-app/commit/d270d938aa8ca8e05c041344f86a7d2ce2edbe4a))
* **user:** add loadingoverlay while logging in ([6d28b91](https://github.com/jwplayer/ott-web-app/commit/6d28b91a6944bc007144cccc5031aa63df85454f))
* **user:** add nav translations ([4f6a203](https://github.com/jwplayer/ott-web-app/commit/4f6a20356fcb01c2aee2c54fa63a16572d4a6aee))
* **user:** add no subscription text ([83de9aa](https://github.com/jwplayer/ott-web-app/commit/83de9aa284b5512774cadefb9a8400f25de421ca))
* **user:** add password reset modal ([96048a1](https://github.com/jwplayer/ott-web-app/commit/96048a1eaa79804e69396fbfbc1865df8150e630))
* **user:** add personal details form to modal ([90ca709](https://github.com/jwplayer/ott-web-app/commit/90ca7094236ed0227d4435624c6395bd7b4456d8))
* **user:** add registration container ([c2479a6](https://github.com/jwplayer/ott-web-app/commit/c2479a6d53dac5968a333263b11a7fa907edd97a))
* **user:** add registrationform component ([a412129](https://github.com/jwplayer/ott-web-app/commit/a4121291d18ae43711e4925e14c6bb15c9eacbff))
* **user:** add reset password logic ([c0b9681](https://github.com/jwplayer/ott-web-app/commit/c0b9681d53c8bd8baeb28beef6d5252fd72bd7b6))
* **user:** add show all transactions button ([3cda7cf](https://github.com/jwplayer/ott-web-app/commit/3cda7cf05d9b8d4f3d800a1835141637b9628dfc))
* **user:** add text describing empty paymentmethod or transactions ([ab2237b](https://github.com/jwplayer/ott-web-app/commit/ab2237b9fcf7602cd6762f166b87f8a2a024b5de))
* **user:** add user screen with account and payment ([d16034e](https://github.com/jwplayer/ott-web-app/commit/d16034e0a62385499d7193f49734e57253468fb0))
* **user:** add validation to my-account screen ([bd72479](https://github.com/jwplayer/ott-web-app/commit/bd72479c34bdbf7ca626af320ecca568c852501a))
* **user:** clear blurimage when entering user screen ([9fdaf4e](https://github.com/jwplayer/ott-web-app/commit/9fdaf4e544bf83132b3984f7031ba25e8983d2a5))
* **user:** implement editing account ([e22de8f](https://github.com/jwplayer/ott-web-app/commit/e22de8f8baf5bdf0ba0fa9957185f0d5aaf9c79d))
* **user:** implement subscription business logics ([8fa377b](https://github.com/jwplayer/ott-web-app/commit/8fa377baa28cb8faf53b754ac02588300f11c35c))
* **user:** implemented create account logic ([58eff73](https://github.com/jwplayer/ott-web-app/commit/58eff7324bd93580f5ea364c6e271cc3c9973ce0))
* **user:** redirect to home when user is not logged in ([eb35cc3](https://github.com/jwplayer/ott-web-app/commit/eb35cc3fc79aac0f399f136205fe063ed1418fea))
* **user:** show empty favorites screen ([ce0da5c](https://github.com/jwplayer/ott-web-app/commit/ce0da5ce7d51341f8a7ac9eb231e0e2bdace2de2))
* **videodetail:** adjust buttons according design ([7cbdaed](https://github.com/jwplayer/ott-web-app/commit/7cbdaede369ef2923f8f1189340c2b2abbd21191))
* **videodetail:** implement conditional startwatching button + label ([9915acb](https://github.com/jwplayer/ott-web-app/commit/9915acbebb1c1399cbf542a7329833c25d07e0d2))
* **watchhistory:** store watchhistory in account ([009315b](https://github.com/jwplayer/ott-web-app/commit/009315b4d233c1b8a1a0bbab7327e256aa9e85ac))


### Bug Fixes

* **auth:** disable continue button in registration form ([c8ccfc7](https://github.com/jwplayer/ott-web-app/commit/c8ccfc78e0f495829e40ffe9d9ca75b11979201b))
* **auth:** fix and improve edit password form ([9d862c0](https://github.com/jwplayer/ott-web-app/commit/9d862c02be947f96d87d32a890130b8790b2aadf))
* **auth:** fix auth modal width ([8dd2482](https://github.com/jwplayer/ott-web-app/commit/8dd24828ab04d7d12de7856debbab802d0905e82))
* **auth:** fix registration loading height ([9b9bf59](https://github.com/jwplayer/ott-web-app/commit/9b9bf597aa09d49237e320a419ae4e333aabe450))
* **auth:** improve date field with leading zeros ([bd475ab](https://github.com/jwplayer/ott-web-app/commit/bd475abf194d09c6baf0a0a828b9e28cb7280b70))
* **auth:** improve invalid reset password token message ([01a565e](https://github.com/jwplayer/ott-web-app/commit/01a565ea49012bfd9bf3785e8d1dbe233b22dcb7))
* **auth:** remove defaultLabel for required capture fields ([57d405b](https://github.com/jwplayer/ott-web-app/commit/57d405bedc531d4e1b0fec07edf83fb9cec8fc3b))
* **auth:** skip account initialization when platform has no cleengId ([dca2459](https://github.com/jwplayer/ott-web-app/commit/dca2459284fc315f3dae3bccd771513f1309aebf))
* **auth:** skip reload subscriptions when platform is not svod ([b4e3a22](https://github.com/jwplayer/ott-web-app/commit/b4e3a2200220ea2e634122553b5a017d2c3d7f86))
* **auth:** validate registration form on blur and improve password strength ([89644bc](https://github.com/jwplayer/ott-web-app/commit/89644bc0c46efbc2801e7945a0fe68d0a70e4cab))
* **payment:** choose offer layout improvements ([a19d55e](https://github.com/jwplayer/ott-web-app/commit/a19d55e79b9104932b787f5edc9baf4f1d6076a9))
* **payment:** clear payment error after switching payment method ([b15e2c7](https://github.com/jwplayer/ott-web-app/commit/b15e2c7f8063f9ca78c767345d36c0962500f836))
* **payment:** fix coupon code error ([1a7b1e8](https://github.com/jwplayer/ott-web-app/commit/1a7b1e8eea57531c0c35f981145b522b7a2e7750))
* **payment:** improve checkout price breakdown ([7017341](https://github.com/jwplayer/ott-web-app/commit/7017341407b12c0504f0a5e3f68a2271c45ffe18))
* **payment:** reload subscription after successful payment ([75de7ec](https://github.com/jwplayer/ott-web-app/commit/75de7ec3828b79bec76fa7c9de7d2f0bc5733104))
* **payment:** select year offer by default ([d85c9ba](https://github.com/jwplayer/ott-web-app/commit/d85c9ba6c1d2dff46d9234c367ac35e04a761857))
* **payment:** update coupon not valid message ([8baf273](https://github.com/jwplayer/ott-web-app/commit/8baf273d8e448b64d7e891727b2b806362b5ac1a))
* **player:** fix dropdown showing above video player ([345a80b](https://github.com/jwplayer/ott-web-app/commit/345a80b20666c9c874e8dda4417d25c3218a956e))
* **player:** fix player error after playing the same item a second time ([ed31555](https://github.com/jwplayer/ott-web-app/commit/ed3155551760d312773d47da37948c74e2d9bf0f))
* **player:** save watch progress on player complete event ([7b8dcfb](https://github.com/jwplayer/ott-web-app/commit/7b8dcfb9c3d30b8b13c39621cf20c3d88b7022a6))
* **project:** fix build for iOS 13 ([f84c8b7](https://github.com/jwplayer/ott-web-app/commit/f84c8b741f7a4ec4c4e96c8e27138cb002eaeed9))
* **project:** fix checkbox styling to meet designs ([44e2691](https://github.com/jwplayer/ott-web-app/commit/44e2691945df936ca3e4eab965a2b60eb56305ca))
* **project:** fix start watching button when not logged in ([aabd79e](https://github.com/jwplayer/ott-web-app/commit/aabd79e2210126babe30930a7bb8c1783918396f))
* **project:** fix user menu not opening in some cases ([395b9e8](https://github.com/jwplayer/ott-web-app/commit/395b9e8c5cc43ba6741145621648dab2ed36009e))
* **project:** fix vertical centering loadingoverlay ([5ecdc24](https://github.com/jwplayer/ott-web-app/commit/5ecdc245b5592d94b0b3c106e4d5376fda7de19b))
* **project:** fix vertical centering modal ([ef4686e](https://github.com/jwplayer/ott-web-app/commit/ef4686e8e6d5ffda7f523ecb6e0ec349bc5ac020))
* **project:** prevent native styling and content shift ([1718e2c](https://github.com/jwplayer/ott-web-app/commit/1718e2ccae4ba4e35b3ef9cb57a5cd59e0a1ced3))
* **project:** remove optional label for non editing text field ([2facbf9](https://github.com/jwplayer/ott-web-app/commit/2facbf9d4f33a2a7bd144855a893d3d5c01b7eb9))
* **project:** update breakpoints to meet designs ([880a1aa](https://github.com/jwplayer/ott-web-app/commit/880a1aabd798a3a14e8778c309d8c0c8441a29a7))
* **user:** disable update consents form after submitting ([decfa98](https://github.com/jwplayer/ott-web-app/commit/decfa9814f7f1212a8078b01b3f5c14a274fb3f5))
* **user:** hide menu on tablet as well ([2c6f7e8](https://github.com/jwplayer/ott-web-app/commit/2c6f7e853dbf33ab04b19e96c780d7528623f0b0))
* **user:** prevent early form submitting ([a405ebe](https://github.com/jwplayer/ott-web-app/commit/a405ebef7021ad669e044b197dc9bb218b00687c))
* **user:** remove delete account button ([feb2023](https://github.com/jwplayer/ott-web-app/commit/feb202372cce804b7f943b72f71d777a81b9394b))
* **videodetail:** fix breakpoints and margins to meet designs ([48968e4](https://github.com/jwplayer/ott-web-app/commit/48968e4983903e4a6c1736b4aa1d16dc620fcfb4))
* **videodetail:** prevent play behind paywall ([bcbc3ba](https://github.com/jwplayer/ott-web-app/commit/bcbc3ba05f86e72f7e3e41558baee160e3b120ab))


### Reverts

* Revert "chore(project): removed css module fix" ([6eea39b](https://github.com/jwplayer/ott-web-app/commit/6eea39bbfc3f8c2edabab3aca1a24ad1ef32d529))

## [1.0.0](https://github.com/jwplayer/ott-web-app/compare/73c6598848b81d1df749b2ba1c7545a433afca82...v1.0.0) (2021-06-25)


### Features

* add classnames dependency ([b675390](https://github.com/jwplayer/ott-web-app/commit/b6753904fe3124089c4022512e3f27096118acf3))
* **analytics:** implement OTT video analytics ([90bbbaa](https://github.com/jwplayer/ott-web-app/commit/90bbbaafc4fc95f227b3922d156e0fd9103f63f9))
* **analytics:** load jwpltx adhoc when analyticsToken is set ([ed30fe8](https://github.com/jwplayer/ott-web-app/commit/ed30fe828e5b36a731644ec0d261c16f83a015ee))
* **favorites:** add favorites shelf ([15ff11c](https://github.com/jwplayer/ott-web-app/commit/15ff11ce44c4fef351b6f8e068131c45307bd0e5))
* **favorites:** implement favorites store and hooks ([1032cdb](https://github.com/jwplayer/ott-web-app/commit/1032cdb8691a4a168b07451a31c6ded28586f06d))
* **home:** add arrow icons to slider ([f04b74c](https://github.com/jwplayer/ott-web-app/commit/f04b74c625b246cf38c0e6a882434d1d6fbe8c54))
* **home:** add chevron correction for featured shelf ([e704d75](https://github.com/jwplayer/ott-web-app/commit/e704d7562705c07db830cbdd8519df05ef60a5ab))
* **home:** add home screen and slider ([17f1f00](https://github.com/jwplayer/ott-web-app/commit/17f1f00a4c72e6cd800e7d2516859d6c8fed7723))
* **home:** add lazy rendering ([3d1c954](https://github.com/jwplayer/ott-web-app/commit/3d1c954b2e7424f3a9cc345333019f1fb973dff3))
* **home:** add shelf loading state ([3bcb426](https://github.com/jwplayer/ott-web-app/commit/3bcb4262a27e20f439c07ffb9241c0572130c30f))
* **home:** add skeletons while loading ([c010592](https://github.com/jwplayer/ott-web-app/commit/c0105924adb09044adc3e566f4725ed1ebc9f204))
* **home:** add watchhistory to home content ([e87ca15](https://github.com/jwplayer/ott-web-app/commit/e87ca15a5fb333d4fc83813203c72594dc6dae0a))
* **home:** fix roles tree for accessibility ([f8bfe6d](https://github.com/jwplayer/ott-web-app/commit/f8bfe6d07e279981a4fc13105cd0a1d28464e837))
* **home:** implement auto play for continue watching shelf ([86d8ecc](https://github.com/jwplayer/ott-web-app/commit/86d8ecc7c699b283360c044e341abb7f88b895bb))
* **home:** implement loading few shelves ([d9898d4](https://github.com/jwplayer/ott-web-app/commit/d9898d4784680baef6de1052aed1e1edb7d8ec70))
* **home:** make skeleton more subtle ([e9d69ff](https://github.com/jwplayer/ott-web-app/commit/e9d69ff4b6f42b5293df9a0a2e2d3934c088e408))
* **home:** prevent vertical scroll while sliding shelf ([10b2c45](https://github.com/jwplayer/ott-web-app/commit/10b2c45c4bddc117d8a0d6ae75b7ce05299b5bd5))
* **home:** show only 1 tile in featured shelf ([e7cd1ba](https://github.com/jwplayer/ott-web-app/commit/e7cd1bab8cf85046fd035d850aaa921559281443))
* **home:** show shelf arrows on hover ([f978d37](https://github.com/jwplayer/ott-web-app/commit/f978d37fbb71d32c0b19b749cfe8e5ecd68a70f0))
* **layout:** add button component ([c1ba8e2](https://github.com/jwplayer/ott-web-app/commit/c1ba8e22c12646f0e22bc27c6005abb0b8139b2b))
* **layout:** add filter modal ([6576771](https://github.com/jwplayer/ott-web-app/commit/657677106e390943983488e13a673b21189ba103))
* **layout:** removed button outline ([71d645d](https://github.com/jwplayer/ott-web-app/commit/71d645d24e3082d7d65f95abc812f019d882783f))
* **layout:** ui tweaks ([f07809d](https://github.com/jwplayer/ott-web-app/commit/f07809d26403b5ec369da632d8fcc51ebd7a22a0))
* **playlist:** add layout component ([743cefe](https://github.com/jwplayer/ott-web-app/commit/743cefe95234f740d84bec9bb61c5806a368d250))
* **playlist:** add playlist navigation to header ([0b0b1a6](https://github.com/jwplayer/ott-web-app/commit/0b0b1a653d321ce9db8410ce04b9514419a103be))
* **playlist:** add playlist navigation to sidebar ([1f1a5fb](https://github.com/jwplayer/ott-web-app/commit/1f1a5fb8dae3951017fa210d83d80f66bac865d8))
* **playlist:** add series tag ([61fca28](https://github.com/jwplayer/ott-web-app/commit/61fca2890714ba8be1bc255619e88e16bed9ad7d))
* **playlist:** add virtualizedgrid ([8f850f4](https://github.com/jwplayer/ott-web-app/commit/8f850f4e033132473a056f5d6bb6d9f20688b10d))
* **playlist:** add virtualizedgrid to playlist ([235c99c](https://github.com/jwplayer/ott-web-app/commit/235c99c6b02e3096c134837f07bd6ce68226348e))
* **playlist:** fix roles for accessibility ([566fe72](https://github.com/jwplayer/ott-web-app/commit/566fe724f722669fd0432e26f9d9bf6c641a09af))
* **playlist:** get filters from config ([2a7aea6](https://github.com/jwplayer/ott-web-app/commit/2a7aea68efb101cab6d684c0a8ab5ba04eedce8e))
* **playlist:** made filters responsive ([f833add](https://github.com/jwplayer/ott-web-app/commit/f833add098ea971e692e76975ce2e12d14111d28))
* **project:** add and implement SearchBar component ([939860f](https://github.com/jwplayer/ott-web-app/commit/939860f23e418a314642d15796fb8584703fe903))
* **project:** add animation, grow and fade components ([944c9cc](https://github.com/jwplayer/ott-web-app/commit/944c9cc8338ab5854ff45e2ee9ea443c229b6f0d))
* **project:** add aria properties to header ([df53f63](https://github.com/jwplayer/ott-web-app/commit/df53f63d39a400a7de5e185da752f613e2047027))
* **project:** add buttonlink component ([7177e9a](https://github.com/jwplayer/ott-web-app/commit/7177e9a9d930f430a9ae7071581d3c52c9643762))
* **project:** add card component and first test ([e82f950](https://github.com/jwplayer/ott-web-app/commit/e82f950eb627429b558c0dbd10a08740991cc5e5))
* **project:** add card enum aspect ratio ([2bec3c9](https://github.com/jwplayer/ott-web-app/commit/2bec3c95754e0fccc8b42e1bd38edbfab667f8f1))
* **project:** add card grid component ([ca52c6b](https://github.com/jwplayer/ott-web-app/commit/ca52c6bb7a6cbba64b3fef93c3494c21b1220f02))
* **project:** add category filtering to playlist ([829ab43](https://github.com/jwplayer/ott-web-app/commit/829ab4345366f92e9764b11ee3561395782a381e))
* **project:** add chunk collection util ([c2513f5](https://github.com/jwplayer/ott-web-app/commit/c2513f5730ff4834fa44a1d55b1b518a9066bc5a))
* **project:** add classnames dependency ([4086f33](https://github.com/jwplayer/ott-web-app/commit/4086f331478724c69c3d5e22622c82dbb4a4cc10))
* **project:** add close icon component ([54fc326](https://github.com/jwplayer/ott-web-app/commit/54fc326a664ddfaf3f6a5ae9ab7d5a5b8d3cfacd))
* **project:** add config loader and provider ([5a66fcd](https://github.com/jwplayer/ott-web-app/commit/5a66fcd4aff4385f2508fcbd14532b31264de6dc))
* **project:** add create icon component ([d5a72dd](https://github.com/jwplayer/ott-web-app/commit/d5a72dd7401ea3f31c11e48158b9a0f63f035759))
* **project:** add debounce function ([b54753f](https://github.com/jwplayer/ott-web-app/commit/b54753faa278af8616a39d95639f164a4dd5c4b5))
* **project:** add dom util functions ([c28a288](https://github.com/jwplayer/ott-web-app/commit/c28a288eeeaa4e86e9bbdcbd973e2648f7f2609b))
* **project:** add dropdown component ([8079987](https://github.com/jwplayer/ott-web-app/commit/807998770c204528a77a7f46f12f81975d5ee6a7))
* **project:** add dynamic blur ([47b409d](https://github.com/jwplayer/ott-web-app/commit/47b409d7b633ae151a01633b67ae08679c676f45))
* **project:** add fallback to highlight color ([09e20de](https://github.com/jwplayer/ott-web-app/commit/09e20dee344fdb3edd59314d7daed7251bbc16fe))
* **project:** add filters to config ([f822de8](https://github.com/jwplayer/ott-web-app/commit/f822de82ee6dcc65ba3d5a800da89e41039784c7))
* **project:** add footer and footer markdown ([c3297f3](https://github.com/jwplayer/ott-web-app/commit/c3297f30d035f1867419eee479b12e0500ed2943))
* **project:** add footer from config ([ded5171](https://github.com/jwplayer/ott-web-app/commit/ded51714569a63efeca6eea1089388fdf6ceef7b))
* **project:** add header component ([b793979](https://github.com/jwplayer/ott-web-app/commit/b7939792c59b964f82aa67d56a461ef9aca0124d))
* **project:** add helmet and move metadata to helmet ([b6c0a42](https://github.com/jwplayer/ott-web-app/commit/b6c0a420e8567adff58ed01867206f86f974da2d))
* **project:** add hover to card component ([0f57a3d](https://github.com/jwplayer/ott-web-app/commit/0f57a3d946607cbff24dc677693acca203b267a4))
* **project:** add jest-dom dev dependency ([31fc7ff](https://github.com/jwplayer/ott-web-app/commit/31fc7ffc7a34f3a1ff8122ddcb52ede770c86d26))
* **project:** add layout component ([c9d813b](https://github.com/jwplayer/ott-web-app/commit/c9d813beb7e2fa960d4b3e0c5d6c456402b54ee1))
* **project:** add layout component to home screen ([c4057f3](https://github.com/jwplayer/ott-web-app/commit/c4057f30425c09e8d778216d838b7dfb0dbe48c3))
* **project:** add live and episode tag to card ([fb28192](https://github.com/jwplayer/ott-web-app/commit/fb281929e048ba5ea313c415d00d122beccccac0))
* **project:** add lodash.throttle dependency ([be50781](https://github.com/jwplayer/ott-web-app/commit/be507812a2ad64a124c124eddb1a36789d2c1561))
* **project:** add logo component ([bb67fe3](https://github.com/jwplayer/ott-web-app/commit/bb67fe36508276fce2cd4682e48c61f398b4ffe1))
* **project:** add markdown component ([a9308de](https://github.com/jwplayer/ott-web-app/commit/a9308de69b8145c6e5b67319344e54b574291090))
* **project:** add menu icon component ([82a066a](https://github.com/jwplayer/ott-web-app/commit/82a066adab709a8fae35036e0169f1e9d81e5d30))
* **project:** add metatags, logo and icons ([9134799](https://github.com/jwplayer/ott-web-app/commit/91347993012f7110446693ec0b8eb1979d0f5329))
* **project:** add mobile menu button to header ([6576d5b](https://github.com/jwplayer/ott-web-app/commit/6576d5bf09774a33d14dde1505e35c68f747aff3))
* **project:** add nullable as values for colors ([9a3cc67](https://github.com/jwplayer/ott-web-app/commit/9a3cc676dcfbe97a348875821cc6a1fae584728f))
* **project:** add placeholder home screen ([06df909](https://github.com/jwplayer/ott-web-app/commit/06df9095bf878e2798f9ff0203207c1197f2ed30))
* **project:** add playlist container ([7092c99](https://github.com/jwplayer/ott-web-app/commit/7092c9961cc42370038555e961d246224230f47d))
* **project:** add playlist grid ([672d96d](https://github.com/jwplayer/ott-web-app/commit/672d96d762cfcda28b8874295c4fa061eecf2746))
* **project:** add playlist placeholderdata for skeletons ([b6c8e7a](https://github.com/jwplayer/ott-web-app/commit/b6c8e7abafc3c66c71fddeb673242ad65e342c7f))
* **project:** add playlist screen and container ([ccba942](https://github.com/jwplayer/ott-web-app/commit/ccba942b2493cc7f7fc864bf9875dd6d4a08e342))
* **project:** add playlist types ([360d774](https://github.com/jwplayer/ott-web-app/commit/360d77413e8e93dff297661a7ec06625edf1bcbb))
* **project:** add preconnect tags ([bec5608](https://github.com/jwplayer/ott-web-app/commit/bec560858ce4be4d12131d48bf08596eead67b39))
* **project:** add provisional stores for user, watchhistory, favorites, config ([c5aa477](https://github.com/jwplayer/ott-web-app/commit/c5aa477fd35e6c5f66c0cfe489eb2951841b12b6))
* **project:** add pullstate dependency ([b02043f](https://github.com/jwplayer/ott-web-app/commit/b02043fd8e32aec206490e420650f0f744041669))
* **project:** add query provider and use playlist hook ([303a5e8](https://github.com/jwplayer/ott-web-app/commit/303a5e83d0d2529355c7e80a44b746b98a4a8f6e))
* **project:** add react-virtualized ([67c5cc8](https://github.com/jwplayer/ott-web-app/commit/67c5cc8c1ecb028507cb0292e2105f0361396e5b))
* **project:** add readme ([73c6598](https://github.com/jwplayer/ott-web-app/commit/73c6598848b81d1df749b2ba1c7545a433afca82))
* **project:** add rel noopener to external links in Markdown ([15a5eaa](https://github.com/jwplayer/ott-web-app/commit/15a5eaa349e0b136c99a240405fe143fc016e776))
* **project:** add root component ([5aa3458](https://github.com/jwplayer/ott-web-app/commit/5aa34586265ac9b10effff11badeb87369bc864e))
* **project:** add root component ([577b963](https://github.com/jwplayer/ott-web-app/commit/577b96306369d97aed71b946cbf2857d4b52bbee))
* **project:** add SEO for screens and  update translations ([de5ddc8](https://github.com/jwplayer/ott-web-app/commit/de5ddc86469c6fb68dd002b499291e868ff1c05d))
* **project:** add serialize deprecated config ([13d81f0](https://github.com/jwplayer/ott-web-app/commit/13d81f076f527f9b2787cf0c80851b43d21b991a))
* **project:** add sidebar aria labels ([d8963e2](https://github.com/jwplayer/ott-web-app/commit/d8963e253f3ff333532516b7ce020b6ae6b94436))
* **project:** add sidebar component ([11a39fb](https://github.com/jwplayer/ott-web-app/commit/11a39fb4a3780ad7509701eb44379a28fbe8a9d8))
* **project:** add sidebar transition ([fbacf79](https://github.com/jwplayer/ott-web-app/commit/fbacf79f10f3027715bb3af0292713b4965bf2e5))
* **project:** add structured data for movie and series screens ([2a6df70](https://github.com/jwplayer/ott-web-app/commit/2a6df70f40c78d63745128e1ed312e262751e5fc))
* **project:** add styling and icon props to button ([a1302d2](https://github.com/jwplayer/ott-web-app/commit/a1302d2563de15c0b5680c92d7d703587f97ddf3))
* **project:** add styling to body element ([ba33fb6](https://github.com/jwplayer/ott-web-app/commit/ba33fb6115e862f124210943f6166345b50c185e))
* **project:** add support for shelveTitles option ([ab37b6b](https://github.com/jwplayer/ott-web-app/commit/ab37b6b54bec26a2f2489768338da91c2916dea0))
* **project:** add testUtils ([b5cf3e2](https://github.com/jwplayer/ott-web-app/commit/b5cf3e28d291513977a4a5006123488cf4820496))
* **project:** add title and tag to card component ([b33f40b](https://github.com/jwplayer/ott-web-app/commit/b33f40b7cae04261e9b8c8b554134ffc1a8b22c1))
* **project:** add uistate provider ([59def36](https://github.com/jwplayer/ott-web-app/commit/59def36ce7f60722923ecca32484d9199508d85d))
* **project:** add use breakpoint hook ([24fdf83](https://github.com/jwplayer/ott-web-app/commit/24fdf83ab2fbb01ef376bc56c03e313d20a804b2))
* **project:** add valueprefix to filtering ([6150be9](https://github.com/jwplayer/ott-web-app/commit/6150be94204660601b98cd38db7dbd24f4b38daa))
* **project:** button variants and calculated contrast color ([888094b](https://github.com/jwplayer/ott-web-app/commit/888094b42ab2cbfe39894d8ce294f7bae33dd488))
* **project:** config loading state and add screens ([034da76](https://github.com/jwplayer/ott-web-app/commit/034da766621e871732f0fcc0734911ab0673582a))
* **project:** fetch images responsive ([5b06f72](https://github.com/jwplayer/ott-web-app/commit/5b06f72e1a81d8e86b44eca42d6ec6ac1a4c8915))
* **project:** get header background from config ([16b134c](https://github.com/jwplayer/ott-web-app/commit/16b134c0b53613e7691980f1800943339acb7021))
* **project:** get site metadata from config ([df7ba35](https://github.com/jwplayer/ott-web-app/commit/df7ba3562d1440551653ac4f6153c5e9a38bb831))
* **project:** hide off-screen card metadata ([144ca6a](https://github.com/jwplayer/ott-web-app/commit/144ca6ae43b65f16c2ec5fd770c3e8159d8c48c2))
* **project:** highlight, background color as var ([3cb89d9](https://github.com/jwplayer/ott-web-app/commit/3cb89d90a83125ae3c0f2063741a64f5565712fb))
* **project:** implement enablecontinuewatching config setting ([0d9694d](https://github.com/jwplayer/ott-web-app/commit/0d9694d5be97562fbbbd9adcc3ffd9e7ffb8546a))
* **project:** implement i18next-parser ([22c7abd](https://github.com/jwplayer/ott-web-app/commit/22c7abda08edb35a2abc62682417d1e34958bd18))
* **project:** initialize CodeceptJS tests ([a62dff1](https://github.com/jwplayer/ott-web-app/commit/a62dff13806181d3f15b22cb44041c01f350ed2e))
* **project:** initialized project ([f2ee34c](https://github.com/jwplayer/ott-web-app/commit/f2ee34c9d798095d33bb52219085d7aceba47a7d))
* **project:** make all accessible by keyboard ([14c10af](https://github.com/jwplayer/ott-web-app/commit/14c10afcc366ad6792a849a31b9a2d24bc4b62ae))
* **project:** make card component accessible ([f595117](https://github.com/jwplayer/ott-web-app/commit/f59511784de12bd982f94693ebab74bad367aaac))
* **project:** prevent fade when sliding ([341b8f5](https://github.com/jwplayer/ott-web-app/commit/341b8f5207c4c996b110598ff34f99ef9870233c))
* **project:** put tag above the current playing overlay ([77fe5bd](https://github.com/jwplayer/ott-web-app/commit/77fe5bd3b0108e062202c43189b989c76fd2cc3c))
* **project:** replace buttonlink with variant text buttons ([f139924](https://github.com/jwplayer/ott-web-app/commit/f1399242f44a8c2d3a51dc00fc7d527b58715709))
* **project:** setup react-i18next ([6fb4692](https://github.com/jwplayer/ott-web-app/commit/6fb4692489096c6692770865e040b3ad0d22ad6b))
* **project:** show error page when config fails ([abe95c2](https://github.com/jwplayer/ott-web-app/commit/abe95c268a2b6b832039557fa056828c577ee6da))
* **project:** skip filtering when only 1 item ([7ab705a](https://github.com/jwplayer/ott-web-app/commit/7ab705a36c3cb233fc01ea76469f88fe0b8291b7))
* **project:** update styling to meet designs ([df01d5a](https://github.com/jwplayer/ott-web-app/commit/df01d5a3f6187829bb38d52da95727dbb9ac6397))
* **project:** use watchhistory between min and max values ([d776bf0](https://github.com/jwplayer/ott-web-app/commit/d776bf036f3feb5a94595c51011cebadc10a2ab8))
* **project:** wrap featured slider with empty tiles ([570d1c9](https://github.com/jwplayer/ott-web-app/commit/570d1c9dbcb686816c8105f79c7ec2b8b541a01a))
* **pwa:** add manifest.json and service worker ([49a8d01](https://github.com/jwplayer/ott-web-app/commit/49a8d01230ed59153640efb4eba9e62579d89d5f))
* **pwa:** use register service worker script ([9e3e430](https://github.com/jwplayer/ott-web-app/commit/9e3e430e460a307ad82e8c5579e0c75d46ee31fc))
* **search:** add search screen ([f95fdd4](https://github.com/jwplayer/ott-web-app/commit/f95fdd49316ddd1348cb6795a449424af021a551))
* **search:** add useSearchPlaylist hook ([b30ce66](https://github.com/jwplayer/ott-web-app/commit/b30ce66648cd52d8d12ec78542b280bc045f43f3))
* **search:** auto focus search bar after clicking the search icon ([bf100eb](https://github.com/jwplayer/ott-web-app/commit/bf100eb9afdc62d5fbce83fb296a283ee1d587c8))
* **seo:** update meta tags and add structured data ([2d32ecf](https://github.com/jwplayer/ott-web-app/commit/2d32ecf77a967d2533a9608e98dc56970d2a52f2))
* **series:** add total episodes in video metadata ([7ba0599](https://github.com/jwplayer/ott-web-app/commit/7ba0599765e7951a5d87bb6fd69fbbe0b6a26d4a))
* **series:** show watch progress in episode grid ([18754dd](https://github.com/jwplayer/ott-web-app/commit/18754dd03e4f489205b31e05f1c890a9bbfe9b97))
* **videodetail:** add animation to modal and player ([7164c61](https://github.com/jwplayer/ott-web-app/commit/7164c61180f11df997446957bc58c3f0fefcedc9))
* **videodetail:** add button icons ([14917da](https://github.com/jwplayer/ott-web-app/commit/14917daacefcf757df2a41a8e9bc00f736f01cc3))
* **videodetail:** add card overlay for currently playing ([4dcd01e](https://github.com/jwplayer/ott-web-app/commit/4dcd01e8767a060d098696357c951f3b6a01f27e))
* **videodetail:** add cinema and jwplayer ([0397ac3](https://github.com/jwplayer/ott-web-app/commit/0397ac3e66b4b90c7061b712a51548a4f4cd3b2a))
* **videodetail:** add collapsible text ([405ec1f](https://github.com/jwplayer/ott-web-app/commit/405ec1f20f129c8d88f1abce8c6bb9cdb412e4cc))
* **videodetail:** add continue watching and watch history ([7296635](https://github.com/jwplayer/ott-web-app/commit/72966356309d1f6f1e024e648ae547c3098756dc))
* **videodetail:** add loading and error screen ([808ba61](https://github.com/jwplayer/ott-web-app/commit/808ba619e03972fe734d8e44b64469a58d3553a1))
* **videodetail:** add modal and trailer ([017c6f1](https://github.com/jwplayer/ott-web-app/commit/017c6f184600beb09325950f76d17212e8af76a1))
* **videodetail:** add playnext for movie ([7564a88](https://github.com/jwplayer/ott-web-app/commit/7564a885690acbfb3360816b2353b5410b7ce24d))
* **videodetail:** add playnext for series ([ec39437](https://github.com/jwplayer/ott-web-app/commit/ec3943780cc5c970cdbcbf507147c0f9d7df32d3))
* **videodetail:** add posterfading ([e7b64f8](https://github.com/jwplayer/ott-web-app/commit/e7b64f86e1b310a698ad5531d807103fc339dcba))
* **videodetail:** add screen and routing ([76ac62c](https://github.com/jwplayer/ott-web-app/commit/76ac62cb5d32041a295d69b993dabf2c65126413))
* **videodetail:** add season filters ([8161f3f](https://github.com/jwplayer/ott-web-app/commit/8161f3fed5ed47aef3f2cfd5658a4cf41ec5ea92))
* **videodetail:** add series metadata ([0c2ffaf](https://github.com/jwplayer/ott-web-app/commit/0c2ffaf657df6d686012257fe158ef62907712d6))
* **videodetail:** add tracks for player ([cf8c192](https://github.com/jwplayer/ott-web-app/commit/cf8c19204ef062920f07a7daaaa793ed0bbc0f47))
* **videodetail:** fix responsiveness ([bded9bf](https://github.com/jwplayer/ott-web-app/commit/bded9bf2d51be97605f11554e1d92ae1519a4f38))
* **videodetail:** hide metadata on mouse activity ([a3c109d](https://github.com/jwplayer/ott-web-app/commit/a3c109d8861848de76fecb22b55d3abf0460773e))
* **videodetail:** implement no vertical scroll while playing ([ec5816c](https://github.com/jwplayer/ott-web-app/commit/ec5816c5115aaecbee6075eaf30b62ff7eedfd40))
* **videodetail:** implement share functionality ([7d96945](https://github.com/jwplayer/ott-web-app/commit/7d96945cf03e02045c695fc17c213662a04bd5cf))
* **videodetail:** let metadata react to player useractive event ([a60fc99](https://github.com/jwplayer/ott-web-app/commit/a60fc99245bbfb070329564a512865c11ff7f9f4))
* **videodetail:** player render optimizations ([eefa987](https://github.com/jwplayer/ott-web-app/commit/eefa98700387b3c39f551a6ba701d50940876606))
* **videodetail:** remove watchlistlistener on play complete ([467501c](https://github.com/jwplayer/ott-web-app/commit/467501cc64a979456da90406d944abf8c0ea2b80))
* **videodetail:** set share button conditional to config ([322b1fe](https://github.com/jwplayer/ott-web-app/commit/322b1fe7277e192ff47b9f3bbe1a859986bab4a2))
* **videodetail:** show continue watching button ([9f4c2d9](https://github.com/jwplayer/ott-web-app/commit/9f4c2d93e1cbffbd1f78724cfc3ecdcd58ac4dbb))
* **watchhistory:** add progress indicator to continue watching shelf ([345e04f](https://github.com/jwplayer/ott-web-app/commit/345e04f94d1e79d8aa3a76ccfa235727fa9a193e))


### Bug Fixes

* **home:** avoid tab for react-virtualized ([65fdcac](https://github.com/jwplayer/ott-web-app/commit/65fdcac04d07c35902a6715bc190ecfdf2a3d7e2))
* **home:** disabled out of view cards ([03dcc0d](https://github.com/jwplayer/ott-web-app/commit/03dcc0db96dc69dce856e998dd9e7869bb72dc27))
* **home:** fix CodeceptJS mobile test ([820fb5c](https://github.com/jwplayer/ott-web-app/commit/820fb5c1dd2403c98987d08a4ea15adcbc0f6c63))
* **home:** fix featured shelf height ([8a520ae](https://github.com/jwplayer/ott-web-app/commit/8a520aed591c0434f4dd6ed589bdc4859b35bceb))
* **home:** fix nowrap for tags ([98926b0](https://github.com/jwplayer/ott-web-app/commit/98926b03a1e2d19345dc6151b4d4a1154fb45873))
* **home:** initially disable left arrow slider ([9f9bcea](https://github.com/jwplayer/ott-web-app/commit/9f9bcea617565c9451b9983010bc784c89dd625a))
* **home:** make tiles and arrows tabable ([2ab122f](https://github.com/jwplayer/ott-web-app/commit/2ab122f01ddd7c2dabfa63867bd59462bae68399))
* **home:** prevent featured card title clipping ([ae0ac47](https://github.com/jwplayer/ott-web-app/commit/ae0ac472ce0e04637f2857b2715ffca312927f36))
* **home:** recompute height when favorites or watch history change ([39dbcc9](https://github.com/jwplayer/ott-web-app/commit/39dbcc9d00db5bfeeb628cf261c1d3b2ef8d15fe))
* **home:** show series tag when available ([11a25c1](https://github.com/jwplayer/ott-web-app/commit/11a25c125f06777588a5087a602fbcf7c761a7b2))
* **playlist:** button improvements ([5cc20a2](https://github.com/jwplayer/ott-web-app/commit/5cc20a26442811a7a30bf0e2dc74a3d4b78ac893))
* **playlist:** change filters color and style ([83fa7ac](https://github.com/jwplayer/ott-web-app/commit/83fa7acfbab2b0da3683241068ec0806d899e08f))
* **playlist:** filters styling and reset filter when the id changes ([2c12e07](https://github.com/jwplayer/ott-web-app/commit/2c12e07ca4cb58fbdf0899fac46b9735c3248405))
* **playlist:** iOS Dropdown styling fixes ([fed2e3b](https://github.com/jwplayer/ott-web-app/commit/fed2e3b53016d6958def089fb1d903daa8444c9a))
* **project:** disable TileDock animation when not multipage ([85acb3a](https://github.com/jwplayer/ott-web-app/commit/85acb3a4a9456a98cab16b21019907384303d15d))
* **project:** don’t show copied text when using native share dialog ([3bebd65](https://github.com/jwplayer/ott-web-app/commit/3bebd65d6ee92bca03aeee7d3f798c2ffb73e253))
* **project:** dynamic blur ([f2ce8dc](https://github.com/jwplayer/ott-web-app/commit/f2ce8dca5861c0f01093768375f9773a2d41a7cd))
* **project:** featured card title still clipping ([041a56b](https://github.com/jwplayer/ott-web-app/commit/041a56bece7df95f15583b1c26d5a9b18e52e134))
* **project:** fix backgroundColor option not working ([f0503d8](https://github.com/jwplayer/ott-web-app/commit/f0503d891677666a6996da7f9fadb637dffb69c1))
* **project:** fix episode URL ([2b40c81](https://github.com/jwplayer/ott-web-app/commit/2b40c81ea4d73ff32104e8bc9454b28bb64ddf54))
* **project:** fix header content shift due to image load ([0dbde3f](https://github.com/jwplayer/ott-web-app/commit/0dbde3ff19d576c8cd5eff7dc5cfd15743268e23))
* **project:** fix iOS 13 type error ([c55a9b3](https://github.com/jwplayer/ott-web-app/commit/c55a9b397650b236ec9f70af31a8e1d196774135))
* **project:** fix snowpack optimize using webpack ([4a2883f](https://github.com/jwplayer/ott-web-app/commit/4a2883fc6ac3d58e6e8465662a355319e0fd737a))
* **project:** fix styling for mobile ([8196aa3](https://github.com/jwplayer/ott-web-app/commit/8196aa3bbdc183ace5ff8a1b2b03fab9b30e997e))
* **project:** focus state on focus-visible ([d6eb8c3](https://github.com/jwplayer/ott-web-app/commit/d6eb8c357c7d7d78bae0d2ed3dc67aca2b2295be))
* **project:** implement calculating 100vh correctly ([2e09110](https://github.com/jwplayer/ott-web-app/commit/2e09110fd7577aa91b5a49ca3bba3c7c03ee53fd))
* **project:** inherit all options from the description json ([0dcb0cc](https://github.com/jwplayer/ott-web-app/commit/0dcb0cc58d27aa3ce4df3ca11e8f3721e0c87f37))
* **project:** live tag contrast ratio ([57add4d](https://github.com/jwplayer/ott-web-app/commit/57add4da94ec577e201c8004bad1facb52fa9481))
* **project:** make header buttons visible when using a light header background ([dd94c5d](https://github.com/jwplayer/ott-web-app/commit/dd94c5d31cf88b8b4d69a9cfff9449d32965c112))
* **project:** make page transition smoother ([e1f6bb9](https://github.com/jwplayer/ott-web-app/commit/e1f6bb91fc07c7b8650e5bd9b6bc9374eaa6936d))
* **project:** make PlaylistItem.tags optional ([4e16f59](https://github.com/jwplayer/ott-web-app/commit/4e16f59936f0639789b346ba39a477f8fe7b54f6))
* **project:** overflow bug ([33afa32](https://github.com/jwplayer/ott-web-app/commit/33afa32cbaa53de14b1b64245969c6d3f4f72002))
* **project:** remove Layout width/height ([b77d5bd](https://github.com/jwplayer/ott-web-app/commit/b77d5bdc5da2ecfe255ba9162c8797a4f35deb85))
* **project:** remove outline from menubuttons ([53439c2](https://github.com/jwplayer/ott-web-app/commit/53439c20a83f79082e1014ab32e632e259dd3676))
* **project:** reset scroll on video and series screens ([7bcc930](https://github.com/jwplayer/ott-web-app/commit/7bcc930789a8178763b7e227111a42fd85a040f5))
* **project:** skip focus-visibile on outlined for ipad ([d2887b1](https://github.com/jwplayer/ott-web-app/commit/d2887b13f25b18a84e839ef48facfe8ce3d77c34))
* **project:** skip playlist fetch when no playlistid ([f2f12a9](https://github.com/jwplayer/ott-web-app/commit/f2f12a9d616ccbb2016e3fb5f23ea30a5b3375c7))
* **project:** unify breakpoints js and css ([deb2e56](https://github.com/jwplayer/ott-web-app/commit/deb2e56126c6d9e089e55d4746386f5e36f66565))
* **project:** update current video text ([99447f0](https://github.com/jwplayer/ott-web-app/commit/99447f0d2286cb68875bccf51561778430dc165e))
* **search:** prevent text clip in search bar ([c107638](https://github.com/jwplayer/ott-web-app/commit/c107638b29ab7f707e32c13fc267a3140f5e1e67))
* **search:** reset search bar when clicking a result ([d5ad5b8](https://github.com/jwplayer/ott-web-app/commit/d5ad5b814579a26f99d64eea993ca5de630879d1))
* **series:** add season prefix to episodes dropdown ([3a89e3d](https://github.com/jwplayer/ott-web-app/commit/3a89e3dd1f45b9260ea09a5688a074078e6d65ee))
* **videodetail:** favorite button hover state ([eee9a99](https://github.com/jwplayer/ott-web-app/commit/eee9a99c6a54060679552e52f21d7363a386ed7e))
* **videodetail:** fix collapsibletext mask for webkit ([91a143c](https://github.com/jwplayer/ott-web-app/commit/91a143c7af47b82ac67405e4b31aecb620854ce5))
* **videodetail:** fix error before loading episode ([62406b8](https://github.com/jwplayer/ott-web-app/commit/62406b8e6525f93c02f0f0b9ad6d90bd15454e04))
* **videodetail:** fix icon shadow and overlay gradient ([f899f5d](https://github.com/jwplayer/ott-web-app/commit/f899f5d71c826b2f4e56c51cbf5c3e71d7f417b1))
* **videodetail:** fix NaN visible in continue watching button ([81a4d58](https://github.com/jwplayer/ott-web-app/commit/81a4d580912512d7705e5b58f5bbcdc5fafac518))
* **videodetail:** fix posterfading responsiveness ([aab58bb](https://github.com/jwplayer/ott-web-app/commit/aab58bb715d0f4cfac5152e5953a585f0176d271))
* **videodetail:** fix real 100vh player ([5ff99e1](https://github.com/jwplayer/ott-web-app/commit/5ff99e122f8fd27e15fa9d42b8f9de1d792c7ccf))
* **videodetail:** fix unnecessary chevron collapsibletext ([a476f7a](https://github.com/jwplayer/ott-web-app/commit/a476f7a670f2f39c5b24839e41383c701065cdeb))
* **videodetail:** wrap trailer button and fix buttons responsive ([f190c28](https://github.com/jwplayer/ott-web-app/commit/f190c28a77b18e3865cf6e8de05499869ff8ab0e))

