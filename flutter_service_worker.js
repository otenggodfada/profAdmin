'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.eQ.cache": "bd15e0c1c4c8e36ee8274cbdf9a5650e",
".git/COMMIT_EDITMSG": "0d3ff60ca7c0547839c814846cc6da06",
".git/config": "d063945df4169056e447c5dbeaab53ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dd5a75a9dc34287bb04954c0dbf75ba4",
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
".git/index": "58108541392dd097c992104e07fb8010",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "811639d735e8d2d5c45985938ba97580",
".git/logs/refs/heads/master": "811639d735e8d2d5c45985938ba97580",
".git/logs/refs/remotes/origin/master": "9ce57dcd793dc0f3d155fa94ebf07a6b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/e7fdebdc264e91590a7dfe9192f5e1ac0951c4": "519a06b869086c5dad26c3af4dee4263",
".git/objects/00/f52877d19c0c59cb186faf6277f037473b9e5a": "2a075a89675fcd6352e70d058fa9904e",
".git/objects/02/5670eeefbbe56976f3076ba627c5670be8be00": "155a4238f3b0727e74c4d28f67fa86a7",
".git/objects/04/d1459594dffb3828c6b12219c522fa65ed6168": "fec39d0700a9b9bb148b1bd68ea59161",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/2b4f19b6f7b42189d80cc2fc3142d0bf16e5e9": "91e57529e45b0b895304792dac2dda3b",
".git/objects/06/38698ab8def6d33262cdeebfec54649603e371": "6d68ea436e8cffd47dc505070ef6fe6b",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/8d17c87e9c612207dbee9523dd092935c5dadf": "bf09399c1c8d1d27ba73246b3045b83b",
".git/objects/08/05b5c1a7affe5d94383fe2ee8737d5f4a086d3": "748e0fe59c7eacb5c1bbb8b93486abf3",
".git/objects/08/a18584e6f017c32b3d64b2647157ea127aadb3": "d3b84ecc2ec015a7726e0798449e44b4",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/b7d52a98fb0ef2775578d7e2486c2add977746": "48be860a6072cbc69e46ac95efcadd6a",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/7c676973bddb26269e736d89f293772c9f08be": "980ffe65cbcc1293858f84b1e4adb08e",
".git/objects/11/4b7ab3091f753a2a0f0a1be2d4a59233f9bba5": "bede003e4697a99d3d207597f07fa6cd",
".git/objects/12/cfae45c3a1b8c997d247958bb62bd144743d2d": "6333d954cec3b6181898dec7c4042ca2",
".git/objects/13/0684a92e1b9eb0fe4413e8f8f5f9f4aefc36aa": "fb2f341069a24ebe89a6c88f1b39b75f",
".git/objects/14/47bf70d7c0a20432a081b0949189b172e39210": "d02aa5df4ee1f8b8d3ede02dc3884f5f",
".git/objects/14/717d366fa78c5a4f0c2962b2c9e064972588ca": "3891f1244f74a29a9bbb65e1cf0d4b4e",
".git/objects/14/a1c64036635b2a8dc1d095a08d5d2c8c6bd2ae": "a8640d19849e6bc4e4df2ca5da78e532",
".git/objects/18/ba08873bf3f184cba040f6c7f15c807387f862": "f661db0a5f9d00f428b2099c24f0c2e0",
".git/objects/19/baab7de4cec77bb90b718385077ecd588e2321": "2ae6876f918583a4cadcf5da45f26bf3",
".git/objects/19/de432c845aa5af6eaf203c0875f1d5859ebc70": "315ff2b1e46c1a2969dadb70a89ab3bc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/53f22606042582998e911ffec06b3513f3cca6": "575d8f1ee3988ed181e9dd650b2f432c",
".git/objects/21/5677c50ef7a16947bd5fb2105a16c4f693f003": "f8277423ecb0e977f1c6136acbd4b009",
".git/objects/21/a7667fa03816b06c4198cc49f9523cc4a4e974": "95c2d626f22e8175e7250576fd964322",
".git/objects/23/c08d84014ce6d694ae39fc7430666847cb925c": "6de28556692426fd504f835aa663426a",
".git/objects/26/a891d7094db2abd67ff6eb5ec1d70297bdd52f": "1a30bc4bf17f7ba24a48184eb301c495",
".git/objects/27/ad5a1da73b5b0c577c2218f70e7c6a9aa63ee8": "c6b6221735e9392fcb341a5084291225",
".git/objects/28/3833653ffeef26b6bfaf78e5e8fdf94a57a8f8": "f0d290809caf90d8e9bb4154a435c65e",
".git/objects/2a/7d9b21f1091e19f76de2f6d03bde86dacd4143": "829c1acbdcb5b40f3a4be639d93577e6",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/0434aa07d13fc9574fe3ab61cc7fc3b047a5f5": "ce564bb55e1a1e2e4196fe367f462b62",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/30/f750dfc8bd1bf5e04deda083385c1589e36bcd": "d05c1f6430423cf7795b1581f0103bbc",
".git/objects/31/deea003515bfe325ee7d539b90e136963220bf": "62a6f13a113e60b3fc69c010b2a474f8",
".git/objects/32/3a376171da4ef83364a5217b7b6ad1395ba4d5": "31aef0c8961d7f104322b89bbabbb2e7",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/6d6fa85d1c6053f00f73bba6a216fbcb0ebcae": "fb4605cf857dcc6ebae2473d70cedc2f",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/84678aaa83f30146db8a9a38f5e4e945107f18": "48f7a97ccf2de9d787b316f6ebfff5ac",
".git/objects/3c/ab3dd54914ae6cde51256308de1df4a89d73a6": "ca326ed3d29f39dc6739abab8eb77c0c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/3e2865062ed232ee9dc220eb3914c421cc1474": "4f49e1e08272e5eef33749830ec3c612",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/c8da62a43b62e10ca649582876b32cb8ece0b2": "934f678d4fa87005ee36cf5676caddbb",
".git/objects/45/f862a84ea7a9de13200b33eefc17ece9bb137f": "42b74435e7fd0ea4e6ed090b2544ca45",
".git/objects/46/94b755af17bc36906157538102fb73a1fd0494": "82c3ac5ed903f347d0fb553f47a981fd",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/47/d4f3ed305a40280a07f8042b773a721ad14407": "5322e32432a3718dd93d4c464207a17f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/6f4ea3064c9adcabae06f96fb3f7e5167774ac": "da612c0fb6f31ed4362d935fcd4a8115",
".git/objects/4e/1eb53c9e6665f1af4880bf5a51be4a2a6c6d67": "6019c3aed5df792e6254a18a7b9f9203",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/4f/13522291739e30a3c54455edd30bcec20c5d9e": "12e104bfda407095195a058162a65204",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/710a3a0100e6abc9a7053d6dc01a75d43fe67c": "af83230f95d4ada3dfe75fd9263e9405",
".git/objects/52/40862f6e600b7bdf561c81e7583c42b1ab63c2": "f0ef1421b08e4102508a8cd2aedb9b13",
".git/objects/53/6bd3b14d7406e5cb475f339e6a4fab085bd4a2": "6409d0db70c37e9b9eb50b0809adf2b1",
".git/objects/53/e2a5c2abb99013526d44a83d8d592221ca2175": "a367151c404565074e9c5419974f650d",
".git/objects/55/200d243359791247a5b9b67e719dc66a4a1e4d": "3ec0d5ab581a50187344d50c3c8a7b1d",
".git/objects/55/5dcb5b852412c5427645e6d0bf0f24411607fc": "998461b30ffe8de9cd1eb573f179ec66",
".git/objects/56/6b60ea9a61a685823c28d703dc063c46729cd7": "de044ca76f2abdf58586313f45917cb6",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/e7a1b186a0c3581b246e7453f86489819ac677": "42c9494061921feed6ea7ff684c83719",
".git/objects/60/ff10b8f04c9c698d0a28bab5f6002ce5332991": "a272622118df19b774f366e883cb8dfc",
".git/objects/63/80004b7f8d1aab41115f98fc09fe53ec5720e0": "b89ee0b9e4601189223682fa096447a1",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/00f23f6f9eb2e7a44ffa1d5dacfa2325f54e42": "ce6d8c730f087c86548cf1701c370ff7",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/c8dfa2efef44cf140161b6908f4dc7e7615a87": "21e2a46c514a8a4548e1d462b7dd6759",
".git/objects/6c/f53ca26d1c4febac3902b1776d4e8fff334569": "f4fcf0e32a7edc35b85e5d1b8bb1a380",
".git/objects/6e/ccac296239ea6218794e16467d0d68deb5ab4e": "b3b21fc577dfd7f92aef0c268b75f481",
".git/objects/71/1876e6584f80c412844c8522bce5a8853a4ddb": "42c084324cbb8e1670e9df5dcab067dd",
".git/objects/71/5e7ff83b5b929e090b3e8ab1cba941a9b63c4e": "d1a5287a14d051e168e9fe806c17b7d0",
".git/objects/71/adc1ff874aabf36c85a53c18c04b1ebc5efc7a": "062592b76afeb55419ced254ebcaddfc",
".git/objects/72/5ffca417e142c255a6ef891109f2f6a206efae": "3ce157e8bc911a60f0a2cd23e8e00dd2",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/72/f39cc6c98ec8d2a156f9d4f10106a7a0f4920d": "327ed895ac8f7ca73e0fa4c6cc612a09",
".git/objects/72/fb25dc0230fc9c86e04a48652e58a460310bc9": "11e277766bea24faa4c021d3c74cdb31",
".git/objects/73/be15d693e501e0b7c07142dcb94a186697d257": "80af5163c7f128cfe71469ccd54e7c97",
".git/objects/73/da174fbe7190f10befb4a53a344fb312d854f5": "c3c3b01468d6950eaa35d71b317d67e6",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/2640fcd76632323b21757d6df8157ca4b2c0b5": "50345904191dfcf8e9a5dce194ded578",
".git/objects/75/a9f3c0e78d7761bf33974fe129ba857eefd47f": "00b5f7318b749a08879d3d13aad06924",
".git/objects/77/ee39433f205d171216cb826ed5238d79b31658": "5a8c037900cdcaee97a35c5d21a50975",
".git/objects/79/fe778f7bd530b7c667b4ec909bc00ba92e28eb": "67775f92d68758e41fa556e9fdc52dd1",
".git/objects/7a/02f5b8a9f3af2551bf5867ab09288cb36d0fef": "d25230996bce6c6152422aa7f31f4cf9",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7b/d44d22cc2cc6dbe29d1ca4da4ca18cafc02fad": "9954141f3d7a41010f3423121f531ae7",
".git/objects/7d/e2a54d6b7a8f8874e9ff086c6e88c71d552e5c": "8f7822ddbf5c45b4f551faaecb107e11",
".git/objects/80/119e00ecc2559cd23e8b7bb80bf5e828bd059a": "83835c5a1ac5a55b47e4ab366d7befba",
".git/objects/81/763ed4ca5eb1fe5bf441778442acdcfdfca049": "0debb66426732ea2b224210a03518254",
".git/objects/81/ef3cea9c6c7f6c0ff46efa23fd4480df10fc5d": "86721eb428b218eff3b30eb0af75da26",
".git/objects/83/c9ae5611d7ae37a2df4fc23fcdce3737e31891": "9e953251ed742d0077d493790bd1ada9",
".git/objects/83/fb838629d7132ac66337c8746cc948b914746a": "8d1fd61c2ab18c98b4d62ddef36a277b",
".git/objects/85/b16e6f6e2ea7b53691249d90e08f6ef6bd144f": "a2fefdbddc3a26555b3d3f1d4d4400e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/93ad553cec53e244185a9cdee015ddfa52a1a6": "bf24cb538fb60fd07692c4471382e676",
".git/objects/8c/fea55623e63d7782080b195441df1668852fb2": "f04a3febdee7b9f085fb192e3db5e9cd",
".git/objects/8e/799fd52971626b18350ee7f47524ccc31bb19b": "70e67dc6e815ae133301b8dc97747af8",
".git/objects/8f/6e0cc802b9ba18f791adb0710eb78add42705c": "e4d05c7774f0974f4c2d8f3f3fd7be4e",
".git/objects/90/a0be65c97e0622ddcacefc9bf091ca7e4ca6b3": "6e7f9d2cbe727b8f4de86ab28f9c1258",
".git/objects/90/c846f6de000c34c1a046151bda596e3d3ff535": "b1c336bfaa11a1a827c4642e00b8b12f",
".git/objects/94/1247ad41c663dffa987adaa7e36d36aa2d3fb9": "d228145794dc980218b4197798429253",
".git/objects/94/42736dc0fbd7e216e12b4d8e714439a98634c0": "425ac0ae981cf440009b9470464e60f2",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/02bd4a315052701635ce150f11ba65190e2b24": "53882053dd428a1acafdd8cbbec585d9",
".git/objects/96/3e6d39d9207297706af03b5b829d20dc925516": "c6f3c8798e2017ebd85574b6e6fc9df6",
".git/objects/97/b3a854668a2b0281260766f0763b94c3466e71": "f4126d49036ae576c2b53d957d07440d",
".git/objects/9a/5e521d19bff4ff6737e0451c686b56eac129ff": "2bf35ef4eccb266e605db78d0a4188d1",
".git/objects/9b/d8d00637296a43db93a56f2fe8beb0929856eb": "65f777442d38b1a6390eac4c8279b9b8",
".git/objects/9b/dc4319139153587cb3c289a6137cfc84a07aeb": "254394f3f2c7465b20d32f1d9d072a74",
".git/objects/9c/9ff5e8c06ab0a66acf28271e512d6f9d05ed8a": "f960664a043d7a9d0430f1939aa9f648",
".git/objects/9e/a127fd7ab2358b57e051dbb35e8f92b7d29b67": "f4c3ab5f0c46952cb35c3628e695c5f3",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/663b06eb39216a350442b747024d5199f01aa8": "660434ae6f99227f71393ba3268d6570",
".git/objects/a1/d685a5b6838c6d0de5857cbc0be830795915cc": "ba72fe45dff4c975cc344d3f23952dd1",
".git/objects/a2/652defea4894172576c843e6f91154c807efed": "d42b533d4f0936c8f90998126ab2b342",
".git/objects/a5/f2fda0db771700044c44d76dc63fdecdecd5f1": "02725719390ac4b58ad92e9c7cec3f53",
".git/objects/a6/5237a8eedb774974f6bba7e8f454eb51a7ed7a": "6a5493dadec51c744573ad2b9aa838a9",
".git/objects/a9/30c73dbafd0c9f4545b351cfcef440156abe77": "9846a7a6d61faf6a2abe94861729ad18",
".git/objects/a9/5f09be9f5e3fa4f41a9332566bc0effa9b290f": "03bc7ece02041852da720dee40f664a2",
".git/objects/aa/31d8195622aca4fa497b625bb07c40c967bac2": "c2413ac8cd4c39ab25387e7e21ffae54",
".git/objects/ae/3cc4c1ca6bfe085d336c3db086588d538119f1": "386e4cc990fd2c928635b30a940860f1",
".git/objects/af/665ce0c0bcfc3d0fb7df463577135901d8e955": "68d274bc32327d134df34b457a29c78c",
".git/objects/b0/614034ad3a95e4ae9f53c2b015eeb3e8d68bde": "7ac75a1205d6369de21c8c4b5e901c5f",
".git/objects/b0/fb5650340b28079c80e340a85a7edfc68dbf03": "2ea891323cb9c98682fbd2bfaf824e20",
".git/objects/b1/78398884110fc55439616c13d406c1efc6f941": "59ad05e76952ade956419f2e4003d4c0",
".git/objects/b1/ba7b3c74ba59c05a2475acab7fa50629692358": "78f7928d569d3ad7d4b844d45f76acbb",
".git/objects/b3/dc2718ed609311d25603ec7e623e2a3ef3f2e4": "86223380c69ac376dfe905914c25a40b",
".git/objects/b6/4024390cb2fb348dd2044e8120b43175ab2983": "189e430efb5a8a2815e8e28e164087ec",
".git/objects/b6/80684c7f3972b15d4810f30c781d70c52ab10f": "4b70199434f99a937e58751e1e4f8c6b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cc8f79527171af368ffb35ff7cfb1f383e16bb": "702fee61d8f4316980858f98bbebf984",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/409cf0d36c94414dc4a606bf1a751b2431d4ef": "baa8a4c5961e8e0af6cc1f4d273bd29d",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/c1/e07a6841fe1d577de6710056eb1c15625066b5": "a857a5ba800727991adbc57a11ab76a9",
".git/objects/c2/37160f00c1c332ba8bfba8fc22570be038eedf": "000618e76e4830262ba8e8f527bdb48b",
".git/objects/c3/780f6c15853e9fcae6453abcdca36bae6b0882": "8d4e844268ff66e97048c82f51f2898e",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/2fe4ad8dcf7bc83736fbff9815901c12728a12": "9285cc10b312d026c7ae1cd3ee7a3e8f",
".git/objects/c4/60b10808d5b8de3e6846c5cf37ae3b5949cdcf": "c6c4aff11ebb7c534f8fce03b064685c",
".git/objects/c4/8a25f29fe3825cf65994c36c145d60b095d7de": "63be6ee70166e4c2f30481dd633c0020",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/ad5250022f03dc738786b7d2c5f1879794789d": "ac18409de2db58923e247966266ecc68",
".git/objects/cc/7b9bb1b7d0bba8e761829f94692abf48e417e0": "ccb40c290d8330a83409565f5e893e5e",
".git/objects/ce/2ba6d0d28d6d2f173809bad95a567ab3c7a7a2": "3c768630fe6c4ee0217717d1a9121294",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/e797a4e0bdb5f3e818c9faa318c9c9630236c7": "38a201d7c936577f76dc330e8b09cc0e",
".git/objects/cf/6838c76c59d4236821431b750ac7e9c0e01aea": "ccf80b8704e7ece8b1b9a2491bc251d4",
".git/objects/d2/3099e99a10bb18b7ea7ce22147bdce7a581f06": "9a3e47b54b4f4c8f9a0aec7ac5e93c12",
".git/objects/d3/cb21f9b6ca3d4a317884e1d5c7fac653ac5383": "7153dcdf6e7136968c16146e0a07e622",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/65ef9a847cffdf7bc7f47234c4a1ab7c169526": "39d135a12276f39f3fe640aed0ff5a70",
".git/objects/d8/6d271d3c542554720a3fd1ead372fbf6076eea": "21fba939982d9ad905d262fd0f333cf1",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/de/29fc41cefd0f90105e20c38dab6a4fbac22499": "c5deb407ad3ea1d864ace4f05a625389",
".git/objects/de/4aa304d4f7d49a7976bd6390fe13b6153141ac": "125a31b7da5627534587839156b10cc6",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/6323806655c55b54f2da6c6e3a471d29f05737": "7dca39130bd4395d93f4f90c84cbe755",
".git/objects/e0/ae627170f076854179b87674a7c5cba5c3a7e0": "5899aa6f7804f628ed887c2123e97d43",
".git/objects/e2/5ae8da7521f0d941916b676813a2e8402049b8": "65e1b2008371649fefcd038410759f44",
".git/objects/e3/311075c82fe5cfabc441dd00c11987b9b591f5": "5e176aeae666d62c8b694904beaaa3e1",
".git/objects/e7/f30c2351716a3995d7b93c946a3d28d58135e9": "9f5c66c8cd024414f5091424a0aee37d",
".git/objects/e8/439e968085d9b0fc189a6d0df1c40c6270f706": "62080efeb08d80d516ae63c4d2fd5c37",
".git/objects/e9/22d84f915d5d7ec6df4a725933bc8d0922b092": "f0d778de4926961196a7313e4fff5cf0",
".git/objects/e9/64cf631b9abbdea4beaf2d0d27099010c6d31b": "ec08df5d29f6cbf07872cc376096ac45",
".git/objects/ea/3ccb4484f1fa625619192998c412c4bface2db": "dc1b9ce40d9a33070c709166b4ddef93",
".git/objects/eb/160e61a5b5befa808faa56f5c59430f02ee039": "13b9b3733dda4959e427546caea1a837",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/878bf9146b0841d5f2432212c3fb46c028a09b": "4b94549a4a7b8e7707658b7bd36cc102",
".git/objects/ed/e69f5fb600b5c92ba18b5147004865dfc0f8cd": "1cfd59886cd6a12e4e8145ee721f7e9f",
".git/objects/ef/62fc40f8ded8eda0386dcad51061635c23357e": "f2dbdc46146f72740e2cce558c8f0090",
".git/objects/f2/86de51c687bd41260f99c95d149085801506f2": "2df8cca832d9a23f479e9613ed22af00",
".git/objects/f4/e3c0f152e1da3c97db27eb52cb262e0c0cabd3": "ffcfb2fd100f35be3b328fa2d2917f68",
".git/objects/f6/1a2a1dbd4de4315eec2f90486a4e54718d2446": "ec8b3ed47c5019a89e6f3f3d5319b20c",
".git/objects/fa/7b513ead98229b9db01fa428088a4f1b7a40b5": "f38221d1502c3604bd1544f307e3b9b4",
".git/objects/fb/3ae5db2618ece29b72b7fa59e33df5d254ca4a": "b7040096e50a9c1243d5c7fd8fcf0d2a",
".git/objects/fb/c0c8960078b76a8449fc0d5b92f2dd72a1eb6a": "e4261b3ac1a7f118e991733da262fa94",
".git/objects/fd/aebacae145862b273dbd418d40e6e45f66dd37": "e640b18c1b505d3eb80aa378df9f99ae",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fe/a49e7de6dcace26096ede1a93d9c0395b6a5a2": "5a199df050bd70ac04812b8c3612b6ad",
".git/refs/heads/master": "35b8897de67dd2b5dfba8359b1ecfac1",
".git/refs/remotes/origin/master": "35b8897de67dd2b5dfba8359b1ecfac1",
"assets/AssetManifest.bin": "b6752cb734142cb9cad5a74df3d44a4c",
"assets/AssetManifest.bin.json": "2f55839faf9440737dc2787b4f1c8b98",
"assets/AssetManifest.json": "e5425ce8c54183a464f00817200de7f2",
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
"assets/FontManifest.json": "c1f4dca56fc1e32ae9f406578053d4e3",
"assets/fonts/MaterialIcons-Regular.otf": "4f5205061ece80ca4175315d6d8b7096",
"assets/NOTICES": "8c30111b5effe1c5dffcbd4c3c73098d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e663c4b3e9bd7710193bc0de1b2ec4c1",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "30319b651cc5a6f90fc6842103bf2f56",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ada4133b0a383882b1e9838c4f2047af",
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
"CNAME": "c4b09ae929e8a9359121a1cc9ecbadc5",
"favicon.png": "5c35861f5164625741bb19872bad0f37",
"firebase.json": "50fbbff5b32ef4cb9a03bb350d2b1698",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96952255e1372851e1860eee9769aa22",
"/": "1cfe4604dffa835a49ed10617222628b",
"main.dart.js": "51281dff3426b7abb14c745a86d0fe14",
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
