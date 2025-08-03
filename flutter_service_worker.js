'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2796bf48df1007486e9868334b816545",
".git/config": "65414a0eec47bfd1ea75e52269090a10",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cdda57b27ebaa72ab9e02d48467e9ce1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8ebd950b35c60f9168e9e0a98f0d9a28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c9f59d80bd79e90417651f567e8dcde3",
".git/logs/refs/heads/main": "f70e7f7fbfeac6a7a2f23cb5071fe1ff",
".git/logs/refs/remotes/origin/main": "d51deb7c187fbeb18c427e4ae10e4c52",
".git/objects/04/87840774820e9e30ec2e41e6988fc7b853fde7": "d174cecc02b621af6e96d1b8cb32225b",
".git/objects/07/df301dd949266c4279ca62a34b777ec374ac6d": "723afb6aa42185b4f86c2718bb5908b5",
".git/objects/07/ea1d0a4d4f9cb11c3c278844e035f8e1364b82": "fe393dbff993ad9358f2344525f53dc4",
".git/objects/0a/7ab31beecac5581404e36db0d692561376e3ac": "d231d4f9376912876719aa7b6d5c2573",
".git/objects/0b/219c726c21df3ddf54d476b369e88b9741e185": "7998fc34d586b79e5fea6d48478df3ab",
".git/objects/0b/b6ec1c639f601793707bab3a55f7589d90fb7b": "24d97fc724a7591883623c253737b33a",
".git/objects/11/9d0023d55372ea567e43266261b4a2d00b60e8": "fcd4eca9e7e3008bbbc7b290bc439ace",
".git/objects/14/462644e5c239b500e2d213692aab43f31ad091": "5123091aee5db51ae9a7ed1b01a4bc09",
".git/objects/14/dca14d611b96da40d0a1c2057b830c433c0c08": "9ed430795599b4da038aa0e21ec5dc3a",
".git/objects/15/139733a503af272ba3f1d940e6de1fece514cf": "cc49227002adc1f5fcd756327bd47ef7",
".git/objects/15/4babb3d19caccff9b7ab867d29a5aac40c27e0": "44fa635659d9877055542b98b055ce6c",
".git/objects/17/c6de0d3e7a17f76ca9768fd30431206a41d615": "11e63b626db4443eb28d0f3d10975e21",
".git/objects/18/4a94e01eb65d8a7c8073d0537c2084dc35a407": "6877bb3b2ab97869315e15de29ec4459",
".git/objects/19/0a1efbf39c63b8af7990b5355ee1a25695dd1b": "cacbfe013a8f3e32cc9a92924e9bb3a8",
".git/objects/1a/f0b76523001c3e1813e858bbd57fb30cb68267": "e53ac265c5ede66c819c7f86c8b24f7d",
".git/objects/1c/3cb552211c30fba0f1bc800c292fea25fc3d3e": "870635815a34a8a43b02ecbb1b1f903c",
".git/objects/1c/cf9465046a8743812cd6d62fd081b5e82fbfd2": "df39116d313811aef54a1e425b92b16f",
".git/objects/1d/3e8c7cbb06685dfb65fd7515fa020ce28a675e": "76a400163a34de513702d233bbb0f3bb",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1e/09b2f6a5f8b96cd154c9d6f0b879dd23a1cbea": "6b686773428c1524482ae95974a85bb0",
".git/objects/1e/a5e7afd8a50c7de658e77afdd52ad85c598cfa": "c29d85b7fc2f4c20ac287f3d2cba38ae",
".git/objects/2c/063fdc2f337cb1665beccbf357c62f88bf004e": "cf18d3b1912814fb3cc632d8c48d7bca",
".git/objects/2d/2d4b24508a9ff2b14a732c468d85fb905bff7c": "b91d118f108ca03ded99c1120d63da6b",
".git/objects/2d/2f8db32fd33dd461ce514dd1a498a267173038": "811cb3da3d6b36b16741411c6d06f44c",
".git/objects/2d/d6788a291f81fbe6761d502127310d695be7d2": "f137ebe74fd93049188b617113020dd0",
".git/objects/2e/ee273a71f2708722fe35a6dc48cb6f0b28adb3": "8fcc88a0fc6563339515bcd9377e110f",
".git/objects/32/ed70afa6ce94f4538b699a5cb9fe7affcf4748": "7b26e69c91cc6fcd91349ecdfa80eeba",
".git/objects/32/ff5ef785c28ee345149456f679887dded61430": "a90c370499c635bd2e9738c2d4d93657",
".git/objects/34/7ca6d86a9219c7935e4791a4dac0236e1e880f": "f99e3353228014b7b39b49f41cae1844",
".git/objects/34/82e1dade4b3468108fee451c85a58fe6f73913": "5e183adf9e2ce9eb63c37e79530c7dce",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/4d901fb194d273c0003a93c6b56d4c50eb843a": "9af752b0bf226dee4561451fd2398ab7",
".git/objects/39/be66edbd86c575f2e05cc98aaf116cd054f7a0": "88e6ff6d0c54c220d95ece4413ba76ed",
".git/objects/3a/9452d706427f6dd20f5d977605f2378870a3b3": "35e7634668e62003a07e74c651d132b6",
".git/objects/3b/fd6dd116598d646b324cdace16ae2ad7448c00": "f6fa0979847b62f6f195263c5e3f6931",
".git/objects/3d/e032d9c49e1120c78b1082642cc58f785ac435": "0d5631e4888511c5e3399c3d90bc8665",
".git/objects/3f/fea60853d433b386ec664891c7ccaf855c6cd0": "29a772a59c584c5cb85104b567f92462",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/4ba454a27b36d077a6341a1dea2ce08f024c7b": "f6aa507cafc5f835bfe36d1de65bead0",
".git/objects/42/52cbc5595c65e459c890175ae5966e97f215c1": "b862fb889e4867bff26e80b1f44b04a4",
".git/objects/43/c9ddba8ce626ec1cc6f109942ddc239df0962e": "3436203e06c82abf97b256e1c0648c24",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/6ffde54b47cf7550976d718e502b4f7ea86c21": "4ab66f1d56a3cd945bec35993afe38f1",
".git/objects/4a/7f4bb37a5c010e634239c024772d01f718b51e": "b5c7140851ea6e1625495fd21a110e8d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/1bca8dada9fd3cce4e26503a60072fe5762435": "b426573659dad55782945897820c69cc",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/55/4589692072fd44e863fb46312133e0ef3254d5": "18d715eb86773f23a3ecaf7ffdb701e4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/bf4def0dddff771b413414f2ded2b9f2b5bde0": "ca70dcb88145f70154b970955551b22a",
".git/objects/5a/eb6bd2ccb58e7fa7e97c76c23a4aa7a4797480": "5d17177ed546e6ebeec2f7eb6afe2494",
".git/objects/5c/0d55b77b55fd3cc270e0dbcdffa553052c3818": "c64d7d5680f161e5dd49695648685696",
".git/objects/5d/d4ae77addcdd71fe6edae58a57dc203f4ed573": "7ec5eec202897c73801abf10eaece952",
".git/objects/5d/fcca516e2f68c9cf227eda19bd84426469f875": "f9d232bb34443214e26ba527f30ef4fa",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/c90c0a0a130f50ba28a77a031c58389b622c02": "40c44899248d0781b33a23a15386f30c",
".git/objects/6a/36312ac8e349b463200080d6fb05e33e2bd5d9": "30ed3266dad9bd2afa5b8d505bceb8dd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/e2ee9bd769d34edde01785195a2b86db77c793": "976e4f0c5eba21549b85badfa16b87ab",
".git/objects/71/ea3804b1ae28fa7f27ad0741fbbad64f1e04ba": "a0b919cc71c3c21631d391ef5f084949",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/75/6ffbe65a83e34d99815029b5115587e91dda86": "81d2985e840bb87b08842c8b0b3074f0",
".git/objects/77/23b20c238dbe874b45ae75924a02975864ed5b": "bc0530d97cabf8e6dbcfa70a2ad2e708",
".git/objects/77/c1f4b42926b2a0abcaf6106b691d6b754b1eb3": "f523c405031d41f34561a015eeea3048",
".git/objects/78/0dce20a877f7f21a14ef9524d1bc5cc7faabc6": "b0b1080a604de41b87a9a095b3f65efb",
".git/objects/79/563bbd18fd58e28b234e92ba5d221a7a2284ee": "6a7314952455124570fab642a29c7aea",
".git/objects/79/6f7eb467026ba3f8944db951221ca4f2f504db": "b4e7407c8f8bf6e08f5b163a2e60ed5e",
".git/objects/7c/3c2264b3e4ef3c8e76025f147f6bb98da5d463": "f4223c699f926d6c1febd24ba5ee5dec",
".git/objects/7c/d2156eace73275f46f575495824345acea0e65": "9e132ab0fb921453d7d4a1d5eacfb551",
".git/objects/81/54ff8174d6bb9ae2fa05bdefb1d083a20906eb": "1f9dcb2c9742a6537f415a50f32baef7",
".git/objects/83/a84321dc86db63a3659c2e20a58ba40ce6c1a1": "26d4fe28f2b89ba909554960985e4583",
".git/objects/84/3851e18a453a0d4589a677b8d560ce49d0e6d0": "d2ce222a93447ef4f949aefb85cf3e31",
".git/objects/85/90f921a2203fb660c12ec873d491d7b4c2183b": "970786744926ff008343842fe3abe109",
".git/objects/87/d40fbd6ab2b44b721a3d632a99544acc105465": "7035f0fccd6e7ebb31181d30206f6084",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1240eee8ac57cb23611e51da7cae4199406b4f": "3bb05093e7d97d030aafcf8706906ce6",
".git/objects/8c/355b53508c34f575b0fd07f3d48290e6a25e46": "e545d77c90f998ec7c112c0452c13bb6",
".git/objects/8c/a5fdd1083923a84ce127d66a0f43037d311879": "84be6c46f6a4ed2c9c6a6a95806ab45e",
".git/objects/8e/8176934607415f2248248e7c4e1e0cc0c7956d": "5daac1d2f2c9feec493ec60cb50e696f",
".git/objects/8e/862a3dea5adee8b724aa84996030bb81486ac5": "e4461a16c30c965accf5fac33599520a",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/04f5eb23037f7fb6da130d07c6f454ab16e1e3": "61c6b10fa15980a2d7f2edcb75673120",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/83f9140230bf1caf2734279d24bf37ba9b39c4": "cc2ccecbf8463f3f09101d235cf60b3c",
".git/objects/92/727a444d9a40d3bf2484086aa01b7cd6779614": "7fdb22dfc4baf8e2ff3410b79190e06d",
".git/objects/93/903169b523ffcdf72c6434bdaee89993920aec": "6abc15c478e0fb16fee4eb3d1a9eef31",
".git/objects/95/9e7e75b9a34944fcaf9f4db39456e04e5470a8": "2ffe9f1700ae1e633f62d09723b18ee1",
".git/objects/96/8af87a3c1c238a907f6d09679cdd7d7233cfaf": "d4b2ab4071aa3c70a846ef374e65523d",
".git/objects/96/93027b6f01bfea966fff85a5422294df89e2df": "1715139c6ce2fb715d19b93080ac9624",
".git/objects/99/87f6e886de458cf2c43a7ea65c5238ba3ab805": "d3493e2cf313b80a9353c1980424761b",
".git/objects/9a/7a0cf63d056f6633bf6d280d4935c936830eef": "66dcc82c6bcb7a72b18aa52d97e01801",
".git/objects/a0/0abd2cddc168418e83a82e149c9dc74c501c40": "26c7e3b58ec82c309bd8512240dcfdb2",
".git/objects/a0/a9f092b0a828efdd0eca35816ac48c782bca7c": "95bf2f587f51f9c583fd45a9993d11a4",
".git/objects/a1/97648480fe170669ddb463190f44dd67221b69": "1cfb6e2ea461138e6554bbb0486cc430",
".git/objects/a2/c2aa9576d299980e186fa504655532567d677d": "28d1ae51b44aaa9a1cccbd4406b4dc21",
".git/objects/a3/0fbee5682afd7b2e12b761cfcd5236ebcbc78a": "9540e4d9608650762399715e3871ed7c",
".git/objects/a3/7b15c646441a5c0d9dd78b592a48220ef6baf1": "5b9d2cc2494f0b55985340a945622fc3",
".git/objects/a3/fb588eba0b6ba90cc450f4da6f1879721ae3bc": "9b2c1c1691e43c53092455dafb9a2141",
".git/objects/a5/20a8b3dbbf4d1aeae1f664cf61661cd9f14d09": "dcbfc3a8f65aea3c1cc6c32e7ab307e5",
".git/objects/a5/9af85c4845633f14f3226f1c52353379e9048b": "a6bbbc19e7e85770574f3bd8e2140bd5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/f1c0cfbb2338ee9dbc0c47d5ae77fe410176bd": "8afb371544f3df55c7e7fbc7e8cdcb1b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/e14ba74a8e6a0b504905810c17b131b4264dcc": "1f186cc7229bba1d9901668fa9945f80",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/147aa1b6822091de784cec3ec28b624d3f53a4": "5a98cc2b6002dd344dbeef8b608c4b88",
".git/objects/ab/d23a2a212e25fd18c1b0cffa51e83d3261d25d": "1f00d8321add0216c329463a749053ad",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/5772fffdd2fba6445badf110873a3e017f2447": "54c2d635c981acec8cbb2a9d07f41cef",
".git/objects/ad/7f3743928621c17b114f609335a252786a363e": "38e8f403e0e362b28f3977589953d3ae",
".git/objects/ae/1a86f7638b44dbe2def691d43263a5b9684dcd": "15f664e5e1a9d969dd07795971cb9703",
".git/objects/b1/3402ce551441709982e0e48d8d89acb8df7c51": "36c87f259309a4efeefb533d6c04a8e4",
".git/objects/b2/ef9d437c8c942846a48ef0542c47b91d5a17b5": "73f952a4b552f356bf7b206c0f783525",
".git/objects/b3/165fa5072dc163d81be0c9ad256c48901d4020": "43dbd4994a3258d904a75ada60cce5e9",
".git/objects/b3/6dae4646cf99ffe48b77268971092d3597b2e8": "19bf30aaf50857ec917e83c938847bfa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/911aff843d7bd22e0fb7c78e523873762ffc23": "ab903deccd101d9ffab44658b588274b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/33a993af158c8862847ecce18b8101b8d25207": "5774a131057167c61303a35fc89cb676",
".git/objects/ba/494b5719d40f1f2a3183187144b8a4edc7e87a": "faa3ef8e5ae64f62a0e559c571a622bd",
".git/objects/bf/048e527a000aecf4d090dad394b72cb72c77ed": "71fffe16caba65d5e5764582bee26215",
".git/objects/c3/0ae490458b486c6b1715152f00a45dcc6d51c9": "d4927470acc7c542a09fe06e1f317f6b",
".git/objects/c3/70488cf60e79e010613db4c18ac0a08a205380": "cc173a60b16bd134ee6720b340ae15bf",
".git/objects/c3/74e038be913d210d201d70210e3e97759a7c0d": "82f8f09ea8caaf7c31a7ec1bca629a91",
".git/objects/c5/c658757ca60bfef1f9f8d0e6a11fd2149e0a90": "56fa7b86f580e9ac37d74108b44dfd10",
".git/objects/c8/ec262deaf8ccf90a54718323d8201cc060cbdc": "2cbcf1f1d285e36884a0598c04afa124",
".git/objects/c9/ad4aab070ed42c2b8672f7c1e88a0f559df452": "2f7c666f46b7a138771dcd563db63c3a",
".git/objects/cc/8fe8d64e4f287ede678a7d0289416bc9382941": "5bf14b845d74fa4d8078a1f025500195",
".git/objects/cc/a92479f28315c20803d09ed9d30ebc27d1c671": "06906101d6f82bf5cc469a0199a66699",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/101e197a6e0f96d21d0ccf61d6e78d2656c764": "e7ab2363191e31ba02430d1f959fe04a",
".git/objects/d2/1b1fc0908dfb5e2d5d06a951a81f65bd85b2f0": "3600cea8318233f2f4e06ac055558b9e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a193d65987a6525a927270ac17969322606030": "b93b05a7eaa815a88ed4c02d202f6b04",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e5/334b31e952c51b7b9c1cf02e73b8bf4a76e14c": "dd68d87659a6f63a027a01379e12599d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/a164dc45b4103cd288d7d7b545e4816b0c2d5f": "0cf10b85c9f3038e7e88da9ad0478627",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/3c936d1202a703788e55119bdc07df88a9650f": "569d28a0326e81d60f3af168aba9c757",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/fcb0dfddb4970bb25921e566c45c95a4e8e529": "c9ba4ac3eac80479e723d444625145c6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/ced0f6d204c24ad1f18b5ec49ccb0c68c96748": "3b6d4cd761d9132f603d225b68139c81",
".git/objects/f8/3b21d26583918d7153c38f23dbc5576ed55d91": "7c5f4011307c9cb011483f7e29f749b9",
".git/objects/f9/6add92cfc33598451dd22ae58ea1da82c1a4a9": "740b79a968238ac47f6cf22f5f84b50b",
".git/objects/fb/77e72623cf3cdadccc9558dc0ce64b6c599b0b": "54e98d09db73a316fa737a0370d8947d",
".git/objects/fc/75a9ee18cf4a36d53ecb38a38dfab4f70b4d99": "03e60129aeebdf38b9dc2ad15f9f8586",
".git/ORIG_HEAD": "fd2c6b147dcceb0d4f161acf1ba9ab87",
".git/refs/heads/main": "341971b7c644c1d1034e72948ec4964b",
".git/refs/remotes/origin/main": "341971b7c644c1d1034e72948ec4964b",
"assets/AssetManifest.bin": "a0abd289557908fdc0ca7e204c37ca5e",
"assets/AssetManifest.bin.json": "94a214f33b042bc80f65bfeef503273b",
"assets/AssetManifest.json": "1380b02fd86c9e87ba633bb4f1aa1564",
"assets/assets/sounds/bad_touch.mp3": "d481d868fd40e717110b274c96ac2120",
"assets/assets/sounds/bad_touch_tamil.mp3": "33f3b3eae9311cd7d6b436f328a60059",
"assets/assets/sounds/cat.mp3": "88ba5f9faf2305bc6a3f30eadb1d6985",
"assets/assets/sounds/dog.mp3": "18545cc1f5d989c7c9106522e6e7ccfa",
"assets/assets/sounds/elephant.mp3": "d8c248a5e48e0244f6207a19e82cd5d6",
"assets/assets/sounds/giraffe.mp3": "5c58732e2cfa7dbe39a3414effaf4803",
"assets/assets/sounds/good_touch.mp3": "1ad50a4a0ec6e94089e3e1933dcad0d1",
"assets/assets/sounds/good_touch_tamil.mp3": "7da5c95f262791b2627e7666e98b2ef7",
"assets/assets/sounds/kangaroo.mp3": "03071aaf1afa59b2a6a49a4404ee018c",
"assets/assets/sounds/lion.mp3": "26c84a9892993cee246083d8688ab51a",
"assets/assets/sounds/monkey.mp3": "0c626823c1235ec05b97e73a79d9b601",
"assets/assets/sounds/panda.mp3": "08f65bd8a373fe472d71d144e96398fa",
"assets/assets/sounds/therapy.mp3": "421401ffa3bbbd3f4eb308d2ba37b097",
"assets/assets/sounds/tiger.mp3": "638fef6cfa43442d80e113bff9c27b27",
"assets/assets/sounds/zebra.mp3": "52c847b1668b65d26b73c8986223068c",
"assets/assets/train4.mp4": "739ff91bbc5ea642166c32a2bd447d95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d2fd85dd8f7c269baa3830ce6196435a",
"assets/images/1106.2986v2.pdf": "cf426667bae93a15db9e9867269bbd66",
"assets/images/Alphabets_BG.jpeg": "e5322578b94451fcbfafb37358d57dc4",
"assets/images/Alphabets_Icon.jpeg": "78bc485cb4dfe6f60d789ca3cc92166c",
"assets/images/Animals_BG.jpeg": "c61c70ed3410714ebcda5bb84f0f9e3c",
"assets/images/Animals_Icon.jpeg": "f4fbce8aedb168440ba8680ed60c7561",
"assets/images/apple.jpeg": "7788af4884ccbd606738b00f0bb1bf43",
"assets/images/Apple2.jpeg": "0338fe72462bcc7018f5071c1cb99558",
"assets/images/AskThings_BG.jpeg": "022c9437f9b48893d5f6967e673631a4",
"assets/images/Ask_Icon.png": "8a35d6ffc3f6c74dfc0ca16d95f8d00b",
"assets/images/bad_touch.jpeg": "9ef4ee7a5971f22020d7c8ae0fc1b8cf",
"assets/images/banana.jpeg": "6b4aae73058d472aee1f030d2942f5c7",
"assets/images/cat.jpeg": "dc6c4a426abdd6c5096ac354aa89ab79",
"assets/images/cherry.jpeg": "a18e6f66324ad6f2cbc208eb1bac92ea",
"assets/images/dog.jpeg": "1c53bb1d8268baad2b6c9c12741c6678",
"assets/images/elephant.jpeg": "598d5762c99aa8da166849651d6fd6c4",
"assets/images/fever.jpeg": "cfef6efd5e3e0f8b7911de487fb1b198",
"assets/images/Feveract.jpeg": "909e0c29b9f49fb8097aff550b30da19",
"assets/images/Food.jpeg": "9e014288f56654afe6345ce85b0a8eb9",
"assets/images/Foodact.jpeg": "56ac5c3955e8ecf210e134eb2ed4a2af",
"assets/images/Fruits_BG.jpeg": "e71423120f13f539cd258f6354edaeb7",
"assets/images/Fruits_Icon.jpeg": "f6b1b2896d820d349126d9ecbb325c4c",
"assets/images/Game_Icon.jpeg": "05237729d9b6d91704132e0adc7cadb9",
"assets/images/GB_Icon.jpeg": "7e4819c2b649fdce247d80648a77a38a",
"assets/images/giraffe.jpeg": "407135bd5c78ca136d977cf68b3300ea",
"assets/images/good_touch.jpeg": "2985d4b9dc1fb35e1c73000979d87023",
"assets/images/grapes.jpeg": "313bd6c6bb5753118794bf6a41ec0952",
"assets/images/kangaroo.jpeg": "53d39db7e686821e4e0bc487b03ae8e1",
"assets/images/Learning_Icon.jpeg": "e29f9841ad5a684b18bf4fa73f958a10",
"assets/images/lion.jpeg": "8d5070ce8812e4c27b079e0308249bc4",
"assets/images/mango.jpeg": "de7898b904e0c595fb56c9b736e89210",
"assets/images/Mango2.jpeg": "bff685683f132780d10e445900b9f4e0",
"assets/images/Math_Icon.jpeg": "7a17ceb4cd70b1025383d424508ebca8",
"assets/images/monkey.jpeg": "f3af4bab21b580010a75d5fa1fb0ff44",
"assets/images/Music_Therapy.jpeg": "731bc1211bf7a2e59d7f895562ce6569",
"assets/images/Numbers_BG.jpeg": "1a5c85fdc1219eb98a8427abfacb7d00",
"assets/images/Numbers_Icon.jpeg": "4fc8d78444b95720bdce5ad5cdc76fe6",
"assets/images/orange.jpeg": "14fb2a294bb279be04898709ec750b01",
"assets/images/Paint.jpeg": "63a91302d2f38984775362577b192365",
"assets/images/Paint_Icon.jpeg": "d5f89f41f45f044a86b115cba8d1b2c6",
"assets/images/panda.jpeg": "762aa3e0c7e4d8883f089836e25663c5",
"assets/images/pear.jpeg": "ec9943618f9213ad3361890b6766eaeb",
"assets/images/pineapple.jpeg": "178a98f531ab16a2139672af3ce4e6ad",
"assets/images/Rain_Background.jpeg": "2400067cdebaaa0c97bfb955ab2e4c01",
"assets/images/Shape_Matching.jpeg": "2fbef7453d2a809bab7b0bc9c8a55eb0",
"assets/images/Speech_Therapy.jpeg": "48e45f14b2ef67b89a42f4dfaf983ebe",
"assets/images/Story_Icon.png": "7fab859c59ab000552c6539512afb8ba",
"assets/images/strawberry.jpeg": "4a9114ca7a9b7e437706ae0ab3d2c1b6",
"assets/images/Tangerine.jpeg": "1907827d9c845f09bfc54d4b3b0370a2",
"assets/images/Therapy_Icon.jpeg": "56c1ac6138314b5c4bcfef3b4a61a8b5",
"assets/images/tiger.jpeg": "f4f0b36d57a702f2a2e6d19e23a42f25",
"assets/images/video.mp4": "ee4bb358b40f11aaa2667d452c74d0ec",
"assets/images/Wateract.jpeg": "7bf24340067dfc9bd888aae033728f19",
"assets/images/Waterbottle.jpeg": "a11adca4ef59a86c5ca1dde8e2e7a641",
"assets/images/watermelon.jpeg": "a708443ba7fcdbb79114d8a1d79871c6",
"assets/images/Watermelon2.jpeg": "89b3f460bfa5bff8f981b154a0b586cc",
"assets/images/zebra.jpeg": "41552e29f263bcee1e339956ce576c2c",
"assets/NOTICES": "394a1ed957b63b7883ca4619e579c02b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1f089ffac81a81c1bf56883eb0cab940",
"flutter_bootstrap.zip": "a08fc7b196b641aed59472d7164c71d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85bd050453a110b1975f2975e5d9ecd5",
"/": "85bd050453a110b1975f2975e5d9ecd5",
"main.dart.js": "8f59cb12898c1592893d9861de7169a9",
"manifest.json": "700726ff7321171705076c51d4be2ecd",
"version.json": "e93fa927e8508cc7319989c83e7ac407"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
