'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.eQ.cache": "bd15e0c1c4c8e36ee8274cbdf9a5650e",
".git/COMMIT_EDITMSG": "b9d779299b9b8df580850f5e82397e44",
".git/config": "d063945df4169056e447c5dbeaab53ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9aa4e7553f39165115c9574763e855f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d042c0a15c09cb4d29b2047730ede6a9",
".git/logs/refs/heads/master": "d042c0a15c09cb4d29b2047730ede6a9",
".git/logs/refs/remotes/origin/master": "af16fc8c8c92e815d90eb7351e61fd82",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/5670eeefbbe56976f3076ba627c5670be8be00": "155a4238f3b0727e74c4d28f67fa86a7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/2b4f19b6f7b42189d80cc2fc3142d0bf16e5e9": "91e57529e45b0b895304792dac2dda3b",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/05b5c1a7affe5d94383fe2ee8737d5f4a086d3": "748e0fe59c7eacb5c1bbb8b93486abf3",
".git/objects/08/a18584e6f017c32b3d64b2647157ea127aadb3": "d3b84ecc2ec015a7726e0798449e44b4",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/4b7ab3091f753a2a0f0a1be2d4a59233f9bba5": "bede003e4697a99d3d207597f07fa6cd",
".git/objects/14/a1c64036635b2a8dc1d095a08d5d2c8c6bd2ae": "a8640d19849e6bc4e4df2ca5da78e532",
".git/objects/18/ba08873bf3f184cba040f6c7f15c807387f862": "f661db0a5f9d00f428b2099c24f0c2e0",
".git/objects/19/de432c845aa5af6eaf203c0875f1d5859ebc70": "315ff2b1e46c1a2969dadb70a89ab3bc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/a7667fa03816b06c4198cc49f9523cc4a4e974": "95c2d626f22e8175e7250576fd964322",
".git/objects/2a/7d9b21f1091e19f76de2f6d03bde86dacd4143": "829c1acbdcb5b40f3a4be639d93577e6",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/3a/6d6fa85d1c6053f00f73bba6a216fbcb0ebcae": "fb4605cf857dcc6ebae2473d70cedc2f",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/c8da62a43b62e10ca649582876b32cb8ece0b2": "934f678d4fa87005ee36cf5676caddbb",
".git/objects/46/94b755af17bc36906157538102fb73a1fd0494": "82c3ac5ed903f347d0fb553f47a981fd",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/6f4ea3064c9adcabae06f96fb3f7e5167774ac": "da612c0fb6f31ed4362d935fcd4a8115",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/710a3a0100e6abc9a7053d6dc01a75d43fe67c": "af83230f95d4ada3dfe75fd9263e9405",
".git/objects/53/e2a5c2abb99013526d44a83d8d592221ca2175": "a367151c404565074e9c5419974f650d",
".git/objects/55/200d243359791247a5b9b67e719dc66a4a1e4d": "3ec0d5ab581a50187344d50c3c8a7b1d",
".git/objects/55/5dcb5b852412c5427645e6d0bf0f24411607fc": "998461b30ffe8de9cd1eb573f179ec66",
".git/objects/56/6b60ea9a61a685823c28d703dc063c46729cd7": "de044ca76f2abdf58586313f45917cb6",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/e7a1b186a0c3581b246e7453f86489819ac677": "42c9494061921feed6ea7ff684c83719",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6e/ccac296239ea6218794e16467d0d68deb5ab4e": "b3b21fc577dfd7f92aef0c268b75f481",
".git/objects/71/5e7ff83b5b929e090b3e8ab1cba941a9b63c4e": "d1a5287a14d051e168e9fe806c17b7d0",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/80/119e00ecc2559cd23e8b7bb80bf5e828bd059a": "83835c5a1ac5a55b47e4ab366d7befba",
".git/objects/83/c9ae5611d7ae37a2df4fc23fcdce3737e31891": "9e953251ed742d0077d493790bd1ada9",
".git/objects/83/fb838629d7132ac66337c8746cc948b914746a": "8d1fd61c2ab18c98b4d62ddef36a277b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/fea55623e63d7782080b195441df1668852fb2": "f04a3febdee7b9f085fb192e3db5e9cd",
".git/objects/94/42736dc0fbd7e216e12b4d8e714439a98634c0": "425ac0ae981cf440009b9470464e60f2",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/3e6d39d9207297706af03b5b829d20dc925516": "c6f3c8798e2017ebd85574b6e6fc9df6",
".git/objects/9b/d8d00637296a43db93a56f2fe8beb0929856eb": "65f777442d38b1a6390eac4c8279b9b8",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/663b06eb39216a350442b747024d5199f01aa8": "660434ae6f99227f71393ba3268d6570",
".git/objects/a5/f2fda0db771700044c44d76dc63fdecdecd5f1": "02725719390ac4b58ad92e9c7cec3f53",
".git/objects/a9/30c73dbafd0c9f4545b351cfcef440156abe77": "9846a7a6d61faf6a2abe94861729ad18",
".git/objects/a9/5f09be9f5e3fa4f41a9332566bc0effa9b290f": "03bc7ece02041852da720dee40f664a2",
".git/objects/ae/3cc4c1ca6bfe085d336c3db086588d538119f1": "386e4cc990fd2c928635b30a940860f1",
".git/objects/b0/614034ad3a95e4ae9f53c2b015eeb3e8d68bde": "7ac75a1205d6369de21c8c4b5e901c5f",
".git/objects/b0/fb5650340b28079c80e340a85a7edfc68dbf03": "2ea891323cb9c98682fbd2bfaf824e20",
".git/objects/b3/dc2718ed609311d25603ec7e623e2a3ef3f2e4": "86223380c69ac376dfe905914c25a40b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cc8f79527171af368ffb35ff7cfb1f383e16bb": "702fee61d8f4316980858f98bbebf984",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/409cf0d36c94414dc4a606bf1a751b2431d4ef": "baa8a4c5961e8e0af6cc1f4d273bd29d",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/c1/e07a6841fe1d577de6710056eb1c15625066b5": "a857a5ba800727991adbc57a11ab76a9",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/2fe4ad8dcf7bc83736fbff9815901c12728a12": "9285cc10b312d026c7ae1cd3ee7a3e8f",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6d271d3c542554720a3fd1ead372fbf6076eea": "21fba939982d9ad905d262fd0f333cf1",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/ae627170f076854179b87674a7c5cba5c3a7e0": "5899aa6f7804f628ed887c2123e97d43",
".git/objects/e2/5ae8da7521f0d941916b676813a2e8402049b8": "65e1b2008371649fefcd038410759f44",
".git/objects/e3/311075c82fe5cfabc441dd00c11987b9b591f5": "5e176aeae666d62c8b694904beaaa3e1",
".git/objects/ea/3ccb4484f1fa625619192998c412c4bface2db": "dc1b9ce40d9a33070c709166b4ddef93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/878bf9146b0841d5f2432212c3fb46c028a09b": "4b94549a4a7b8e7707658b7bd36cc102",
".git/objects/ed/e69f5fb600b5c92ba18b5147004865dfc0f8cd": "1cfd59886cd6a12e4e8145ee721f7e9f",
".git/objects/fa/7b513ead98229b9db01fa428088a4f1b7a40b5": "f38221d1502c3604bd1544f307e3b9b4",
".git/objects/fb/3ae5db2618ece29b72b7fa59e33df5d254ca4a": "b7040096e50a9c1243d5c7fd8fcf0d2a",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/refs/heads/master": "f9257f1838c87e7505d892dcf244511f",
".git/refs/remotes/origin/master": "f9257f1838c87e7505d892dcf244511f",
"assets/AssetManifest.bin": "ed620d5c6903f8caadfc5eb3413bb77c",
"assets/AssetManifest.bin.json": "213113c9c305ee06dfe2cd53320a1f48",
"assets/AssetManifest.json": "0f2a73d39a6d3017109a72f74446efcc",
"assets/assets/google_fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/google_fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/google_fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/google_fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/google_fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/google_fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/login.svg": "19f7439dc14de66f17cf8c2e7cf12ec8",
"assets/assets/images/logo.png": "36111e6db5a786b6169bca895a334233",
"assets/assets/images/logo_dark.png": "fcc4284c34948895ba6296228955e0ae",
"assets/assets/images/no_data.png": "39d9a68fb4193711995b3d4d91155d6e",
"assets/assets/images/verify.svg": "af855473ab058fcf5ad8dddad70fa6ae",
"assets/FontManifest.json": "0c132f761567ee3fa2dfeb6942d4479a",
"assets/fonts/MaterialIcons-Regular.otf": "f0bc5137886292a67577a773dc1d0046",
"assets/NOTICES": "6c51724e575d23e394dfbbadd073fcfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e663c4b3e9bd7710193bc0de1b2ec4c1",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "9621e70a7f61cf190f1ba4356fec6dfa",
"favicon.png": "5c35861f5164625741bb19872bad0f37",
"firebase.json": "50fbbff5b32ef4cb9a03bb350d2b1698",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e87019431db783d5f987889fae4a8f0",
"/": "1cfe4604dffa835a49ed10617222628b",
"main.dart.js": "6331bfd81421df0013755c3ec83b28df",
"manifest.json": "0062f75d0e1b2e1920f8c4387296e537",
"version.json": "99d71663ce84a3f9c96c9c51d02ac50e",
"y/.firebase/hosting.eQ.cache": "488d949d76c57f7a912f4a9a5068fdf1",
"y/assets/AssetManifest.bin": "ed620d5c6903f8caadfc5eb3413bb77c",
"y/assets/AssetManifest.bin.json": "213113c9c305ee06dfe2cd53320a1f48",
"y/assets/AssetManifest.json": "0f2a73d39a6d3017109a72f74446efcc",
"y/assets/assets/google_fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"y/assets/assets/google_fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"y/assets/assets/google_fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"y/assets/assets/google_fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"y/assets/assets/google_fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"y/assets/assets/google_fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"y/assets/assets/images/login.svg": "19f7439dc14de66f17cf8c2e7cf12ec8",
"y/assets/assets/images/logo.png": "36111e6db5a786b6169bca895a334233",
"y/assets/assets/images/logo_dark.png": "fcc4284c34948895ba6296228955e0ae",
"y/assets/assets/images/no_data.png": "39d9a68fb4193711995b3d4d91155d6e",
"y/assets/assets/images/verify.svg": "af855473ab058fcf5ad8dddad70fa6ae",
"y/assets/FontManifest.json": "0c132f761567ee3fa2dfeb6942d4479a",
"y/assets/fonts/MaterialIcons-Regular.otf": "f0bc5137886292a67577a773dc1d0046",
"y/assets/NOTICES": "6c51724e575d23e394dfbbadd073fcfa",
"y/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e663c4b3e9bd7710193bc0de1b2ec4c1",
"y/assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"y/assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"y/assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"y/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"y/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"y/assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"y/assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"y/assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"y/assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"y/assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"y/assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"y/assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"y/assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"y/assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"y/assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"y/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"y/canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"y/canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"y/canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"y/canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"y/canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"y/canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"y/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"y/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"y/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"y/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"y/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"y/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"y/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"y/index.html": "1cfe4604dffa835a49ed10617222628b",
"y/main.dart.js": "691fbe9e2dae4dec9239c633d7afa359",
"y/manifest.json": "0062f75d0e1b2e1920f8c4387296e537",
"y/version.json": "99d71663ce84a3f9c96c9c51d02ac50e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
