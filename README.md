# VTuber Database [![Build Status](https://github.com/dd-center/vdb/workflows/Node%20CI/badge.svg)](https://github.com/dd-center/vdb/)
[![All Contributors](https://img.shields.io/badge/all_contributors-74-orange.svg?style=flat-square)](#contributors-)

The Virtual Youtuber Name List Database.

We are looking for creating a database containing all vtubers.

Online Editor: <https://submit.vtbs.moe>

### Usage:

JSON file can be downloaded from: `https://vdb.vtbs.moe/json/list.json`, [https://vdb.vtbs.moe/json/list.json](https://vdb.vtbs.moe/json/list.json)

* `meta`: `Object` Metadata. Tools for parsing information about each individual VTuber.

  * `UUID_NAMESPACE`: (`String`) The UUID namespace, currently `9e880107-dd14-4f7d-a04c-4b2bf8d9db7d`.

  * `linkSyntax`: (`Object`) A map of formatting strings, organized as `"platform":"formatting string"`. The formating strings contain substring `{id}`. By replacing `{id}` with the respective platform ID, a URL to his/her channel or profile on that plaform is generated.
  
    For example, A virtual youtuber has bilibili id `349991143` (i.e. `vtbs[].accounts[i].platform == "bilibili"` and  `vtbs[].accounts[i].id == "349991143"`. See `vtbs.accounts` below), and `linkSyntax.bilibili` is `https://space.bilibili.com/{id}`, So `https://space.bilibili.com/349991143` will be the url.

  * `timestamp`: (`Number`) Latest committer date, UNIX timestamp

* `vtbs`: (`Array[Object]`) Contains all Vtubers

  * `uuid`: (`String`) The uuid generated from the namecpace and file in `/vtbs` name
  * `type`: (`String`) Type, can be `vtuber`, `group`, `fan` or `unknow`
  * `bot`: (`Boolean`) robot vtuber/vup
  * `accounts`: (`Array[Object]`)
    * `id`: (`String`) The account identifier of that platform
    * `type`: (`String`) `official` or `relay`
    * `platform`: (`String`) Can be `youtube`, `twitter`, `bilibili`, `userlocal`, or something else
  * `name`: (`Object`)
    * `default`: (`String`) the default language of name
    * `cn`: (`String`) Chinese name
    * `jp`: (`String`) Japanese name
    * `en`: (`String`) English name
    * ...
    * `extra`: (`Array[String]`) Alternative names

### File structure:

* `/backup`: some script and list from elsewhere

* `/config`: the config file

  * `/config/index.js`:  the main config file

    * UUID_NAMESPACE: The current UUID namespace

    * linkSyntax: the link syntax

* `/syntax`: syntax guides

  * `/syntax/list.json`: A very minimal list.json example

* `/test`: test files

  * `/test/repeat.js`: test for duplicated official accounts

* `/vtbs`: all vtubers in human readable/editable format

* `index.js`: The database generator, return promise

* `generator.mjs`: write the database to json file

### Extra

uuid of each vtuber is generated with uuid v5 from the uuid namespace and the vtuber data filename located in `/vtbs`

### Contribution

Node.js is required for some processes

if Node.js is installed, you can use `npm install` to install necessary packages.

* Fork it
* Pull request

#### Add/Update Vtuber

Add or edit files in `/vtbs`,

`.json` format,

if possible, run unit test by `npm test`.

<u>Or,</u> online editor <https://submit.vtbs.moe> can be used, only a browser is needed.

#### Add/Update Social Media Platform linkSyntax

Edit `/config/index.js`.

#### Unit test

`npm test`

If there is error, there is a problem with files.

#### Rewrite json files (Production)

Make sure to pass all the tests!

Use  `node generator.mjs`

This step is required for vtbs.moe refresh the list.

Should be done automatically on GitHub Actions.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/simon300000"><img src="https://avatars1.githubusercontent.com/u/12656264?v=4?s=72" width="72px;" alt=""/><br /><sub><b>simon3000</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=simon300000" title="Code">💻</a> <a href="#content-simon300000" title="Content">🖋</a></td>
    <td align="center"><a href="http://qaq.gd"><img src="https://avatars3.githubusercontent.com/u/2290026?v=4?s=72" width="72px;" alt=""/><br /><sub><b>brainbush</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=brainbush" title="Code">💻</a> <a href="#content-brainbush" title="Content">🖋</a></td>
    <td align="center"><a href="https://faithtown.tech"><img src="https://avatars3.githubusercontent.com/u/20179549?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Afanyiyu</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=Afanyiyu" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/miragora123"><img src="https://avatars2.githubusercontent.com/u/41156138?v=4?s=72" width="72px;" alt=""/><br /><sub><b>miragora123</b></sub></a><br /><a href="#content-miragora123" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/makiscarle"><img src="https://avatars3.githubusercontent.com/u/54412846?v=4?s=72" width="72px;" alt=""/><br /><sub><b>makiscarle</b></sub></a><br /><a href="#content-makiscarle" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yfk2012"><img src="https://avatars0.githubusercontent.com/u/53398439?v=4?s=72" width="72px;" alt=""/><br /><sub><b>yfk2012</b></sub></a><br /><a href="#content-yfk2012" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yamisight"><img src="https://avatars2.githubusercontent.com/u/54345477?v=4?s=72" width="72px;" alt=""/><br /><sub><b>yamisight</b></sub></a><br /><a href="#content-yamisight" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kevinmiao907"><img src="https://avatars2.githubusercontent.com/u/32000679?v=4?s=72" width="72px;" alt=""/><br /><sub><b>kevinmiao907</b></sub></a><br /><a href="#content-kevinmiao907" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/huan-guang"><img src="https://avatars1.githubusercontent.com/u/48501931?v=4?s=72" width="72px;" alt=""/><br /><sub><b>幻光灵风</b></sub></a><br /><a href="#content-huan-guang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/GCyingmanji"><img src="https://avatars2.githubusercontent.com/u/54054372?v=4?s=72" width="72px;" alt=""/><br /><sub><b>GCyingmanji</b></sub></a><br /><a href="#content-GCyingmanji" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/JoshuaHiroko"><img src="https://avatars2.githubusercontent.com/u/54072825?v=4?s=72" width="72px;" alt=""/><br /><sub><b>JoshuaHiroko</b></sub></a><br /><a href="#content-JoshuaHiroko" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/NeroArc"><img src="https://avatars1.githubusercontent.com/u/49861997?v=4?s=72" width="72px;" alt=""/><br /><sub><b>NeroArc</b></sub></a><br /><a href="#content-NeroArc" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/IzumiNanaya"><img src="https://avatars1.githubusercontent.com/u/53500939?v=4?s=72" width="72px;" alt=""/><br /><sub><b>IzumiNanaya</b></sub></a><br /><a href="#content-IzumiNanaya" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/NekodakeRise"><img src="https://avatars2.githubusercontent.com/u/54005076?v=4?s=72" width="72px;" alt=""/><br /><sub><b>NekodakeRise</b></sub></a><br /><a href="#content-NekodakeRise" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/SlagerZ"><img src="https://avatars2.githubusercontent.com/u/31960814?v=4?s=72" width="72px;" alt=""/><br /><sub><b>SlagerZ</b></sub></a><br /><a href="#content-SlagerZ" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ZTMC"><img src="https://avatars2.githubusercontent.com/u/11673073?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Z - The Magical Color</b></sub></a><br /><a href="#content-ZTMC" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/yuqingyuci"><img src="https://avatars0.githubusercontent.com/u/53669894?v=4?s=72" width="72px;" alt=""/><br /><sub><b>yuqingyuci</b></sub></a><br /><a href="#content-yuqingyuci" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/morykudo"><img src="https://avatars1.githubusercontent.com/u/53271042?v=4?s=72" width="72px;" alt=""/><br /><sub><b>morykudo</b></sub></a><br /><a href="#content-morykudo" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/fubuki1057"><img src="https://avatars0.githubusercontent.com/u/53498430?v=4?s=72" width="72px;" alt=""/><br /><sub><b>fubuki1057</b></sub></a><br /><a href="#content-fubuki1057" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/AwAw565"><img src="https://avatars1.githubusercontent.com/u/53491343?v=4?s=72" width="72px;" alt=""/><br /><sub><b>AwAw565</b></sub></a><br /><a href="#content-AwAw565" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/aa610817338"><img src="https://avatars0.githubusercontent.com/u/53430484?v=4?s=72" width="72px;" alt=""/><br /><sub><b>aa610817338</b></sub></a><br /><a href="#content-aa610817338" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/bb610817338"><img src="https://avatars3.githubusercontent.com/u/51133708?v=4?s=72" width="72px;" alt=""/><br /><sub><b>bb610817338</b></sub></a><br /><a href="#content-bb610817338" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/sliddqdidkfa"><img src="https://avatars2.githubusercontent.com/u/53249459?v=4?s=72" width="72px;" alt=""/><br /><sub><b>sliddqdidkfa</b></sub></a><br /><a href="#content-sliddqdidkfa" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/C-JIUJIE"><img src="https://avatars3.githubusercontent.com/u/26102177?v=4?s=72" width="72px;" alt=""/><br /><sub><b>C-JIUJIE</b></sub></a><br /><a href="#content-C-JIUJIE" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/992939504"><img src="https://avatars0.githubusercontent.com/u/14029071?v=4?s=72" width="72px;" alt=""/><br /><sub><b>992939504</b></sub></a><br /><a href="#content-992939504" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/289788042"><img src="https://avatars1.githubusercontent.com/u/54934416?v=4?s=72" width="72px;" alt=""/><br /><sub><b>289788042</b></sub></a><br /><a href="#content-289788042" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/AFatOtaku"><img src="https://avatars0.githubusercontent.com/u/37997501?v=4?s=72" width="72px;" alt=""/><br /><sub><b>AFatOtaku</b></sub></a><br /><a href="#content-AFatOtaku" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/wudifeixue"><img src="https://avatars2.githubusercontent.com/u/7316929?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Curtis Xiao</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=wudifeixue" title="Code">💻</a> <a href="#content-wudifeixue" title="Content">🖋</a></td>
    <td align="center"><a href="http://blog.thiece.cn/"><img src="https://avatars3.githubusercontent.com/u/5725831?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Thiece</b></sub></a><br /><a href="#content-Thiece" title="Content">🖋</a></td>
    <td align="center"><a href="http://miraclexyz.github.io"><img src="https://avatars2.githubusercontent.com/u/30370926?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Yuzhang Xie</b></sub></a><br /><a href="#content-MiracleXYZ" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/example123"><img src="https://avatars3.githubusercontent.com/u/87628?v=4?s=72" width="72px;" alt=""/><br /><sub><b>example123</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=example123" title="Code">💻</a> <a href="#content-example123" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/shugen002"><img src="https://avatars1.githubusercontent.com/u/10257291?v=4?s=72" width="72px;" alt=""/><br /><sub><b>shugen002</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=shugen002" title="Code">💻</a> <a href="#content-shugen002" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://sparanoid.com"><img src="https://avatars0.githubusercontent.com/u/96356?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Tunghsiao Liu</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=sparanoid" title="Code">💻</a> <a href="#content-sparanoid" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yuyuyzl"><img src="https://avatars3.githubusercontent.com/u/14276008?v=4?s=72" width="72px;" alt=""/><br /><sub><b>yuzhongliang22</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=yuyuyzl" title="Code">💻</a> <a href="#content-yuyuyzl" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/baolan-zifu"><img src="https://avatars0.githubusercontent.com/u/20073620?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Takaranoao</b></sub></a><br /><a href="#content-baolan-zifu" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ghostmiaojun"><img src="https://avatars1.githubusercontent.com/u/51529364?v=4?s=72" width="72px;" alt=""/><br /><sub><b>ghostmiaojun</b></sub></a><br /><a href="#content-ghostmiaojun" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/IOP1473"><img src="https://avatars1.githubusercontent.com/u/41325343?v=4?s=72" width="72px;" alt=""/><br /><sub><b>IOP1473</b></sub></a><br /><a href="#content-IOP1473" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/sxuweil28kvw"><img src="https://avatars3.githubusercontent.com/u/10825865?v=4?s=72" width="72px;" alt=""/><br /><sub><b>sxuweil28kvw</b></sub></a><br /><a href="#content-sxuweil28kvw" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/PoiDaisuki"><img src="https://avatars3.githubusercontent.com/u/48427092?v=4?s=72" width="72px;" alt=""/><br /><sub><b>PoiDaisuki</b></sub></a><br /><a href="#content-PoiDaisuki" title="Content">🖋</a> <a href="https://github.com/dd-center/vdb/commits?author=PoiDaisuki" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/NciyuandeAK"><img src="https://avatars2.githubusercontent.com/u/54472479?v=4?s=72" width="72px;" alt=""/><br /><sub><b>NciyuandeAK</b></sub></a><br /><a href="#content-NciyuandeAK" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/peng233163"><img src="https://avatars0.githubusercontent.com/u/38469578?v=4?s=72" width="72px;" alt=""/><br /><sub><b>peng233163</b></sub></a><br /><a href="#content-peng233163" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/bluboy-official"><img src="https://avatars2.githubusercontent.com/u/56422076?v=4?s=72" width="72px;" alt=""/><br /><sub><b>bluboy-official</b></sub></a><br /><a href="#content-bluboy-official" title="Content">🖋</a> <a href="https://github.com/dd-center/vdb/commits?author=bluboy-official" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/plzsjj"><img src="https://avatars0.githubusercontent.com/u/57520014?v=4?s=72" width="72px;" alt=""/><br /><sub><b>plzsjj</b></sub></a><br /><a href="#content-plzsjj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/eiji24"><img src="https://avatars0.githubusercontent.com/u/56234390?v=4?s=72" width="72px;" alt=""/><br /><sub><b>eiji24</b></sub></a><br /><a href="#content-eiji24" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/wdwsbn"><img src="https://avatars2.githubusercontent.com/u/42573860?v=4?s=72" width="72px;" alt=""/><br /><sub><b>wdwsbn</b></sub></a><br /><a href="#content-wdwsbn" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Metric-Void"><img src="https://avatars1.githubusercontent.com/u/21335640?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Zixi Lee</b></sub></a><br /><a href="https://github.com/dd-center/vdb/commits?author=Metric-Void" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/zhuhy051"><img src="https://avatars0.githubusercontent.com/u/53340479?v=4?s=72" width="72px;" alt=""/><br /><sub><b>zhuhy051</b></sub></a><br /><a href="#content-zhuhy051" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ryouka-li"><img src="https://avatars0.githubusercontent.com/u/55954445?v=4?s=72" width="72px;" alt=""/><br /><sub><b>ryouka-li</b></sub></a><br /><a href="#content-ryouka-li" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/LoganHaiz"><img src="https://avatars0.githubusercontent.com/u/58725983?v=4?s=72" width="72px;" alt=""/><br /><sub><b>LoganHaiz</b></sub></a><br /><a href="#content-LoganHaiz" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Tup0lev"><img src="https://avatars3.githubusercontent.com/u/23499230?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Tup0lev</b></sub></a><br /><a href="#content-Tup0lev" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/2333tracy"><img src="https://avatars3.githubusercontent.com/u/58852317?v=4?s=72" width="72px;" alt=""/><br /><sub><b>2333tracy</b></sub></a><br /><a href="#content-2333tracy" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Muyisa1551"><img src="https://avatars2.githubusercontent.com/u/58797103?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Muyisa1551</b></sub></a><br /><a href="#content-Muyisa1551" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/doufubao0401"><img src="https://avatars2.githubusercontent.com/u/59215274?v=4?s=72" width="72px;" alt=""/><br /><sub><b>doufubao0401</b></sub></a><br /><a href="#content-doufubao0401" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/SaigusaTomato"><img src="https://avatars2.githubusercontent.com/u/7696112?v=4?s=72" width="72px;" alt=""/><br /><sub><b>SaigusaTomato</b></sub></a><br /><a href="#content-SaigusaTomato" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/qq542065853"><img src="https://avatars3.githubusercontent.com/u/59370820?v=4?s=72" width="72px;" alt=""/><br /><sub><b>qq542065853</b></sub></a><br /><a href="#content-qq542065853" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.8mi.tech"><img src="https://avatars3.githubusercontent.com/u/25455400?v=4?s=72" width="72px;" alt=""/><br /><sub><b>8Mi_Yile</b></sub></a><br /><a href="#content-8MiYile" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/syosaisyo"><img src="https://avatars1.githubusercontent.com/u/56832793?v=4?s=72" width="72px;" alt=""/><br /><sub><b>syosaisyo</b></sub></a><br /><a href="#content-syosaisyo" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Dreamluna"><img src="https://avatars1.githubusercontent.com/u/21006544?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Dreamluna</b></sub></a><br /><a href="#content-Dreamluna" title="Content">🖋</a></td>
    <td align="center"><a href="http://aoowweenn.github.io"><img src="https://avatars1.githubusercontent.com/u/8477931?v=4?s=72" width="72px;" alt=""/><br /><sub><b>UMW</b></sub></a><br /><a href="#content-aoowweenn" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/zhu1040028623"><img src="https://avatars0.githubusercontent.com/u/13773836?v=4?s=72" width="72px;" alt=""/><br /><sub><b>zhu1040028623</b></sub></a><br /><a href="#content-zhu1040028623" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Jingxuanmin"><img src="https://avatars0.githubusercontent.com/u/32416708?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Benben</b></sub></a><br /><a href="#content-Jingxuanmin" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/SaigyoujiKonpaku"><img src="https://avatars1.githubusercontent.com/u/20887709?v=4?s=72" width="72px;" alt=""/><br /><sub><b>SaigyoujiKonpaku</b></sub></a><br /><a href="#content-SaigyoujiKonpaku" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/1126441811"><img src="https://avatars1.githubusercontent.com/u/60805082?v=4?s=72" width="72px;" alt=""/><br /><sub><b>1126441811</b></sub></a><br /><a href="#content-1126441811" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/MPIQI"><img src="https://avatars2.githubusercontent.com/u/60180005?v=4?s=72" width="72px;" alt=""/><br /><sub><b>MPIQI</b></sub></a><br /><a href="#content-MPIQI" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/SuzumeRei"><img src="https://avatars1.githubusercontent.com/u/61557469?v=4?s=72" width="72px;" alt=""/><br /><sub><b>SuzumeRei</b></sub></a><br /><a href="#content-SuzumeRei" title="Content">🖋</a></td>
    <td align="center"><a href="http://corps.js.org"><img src="https://avatars2.githubusercontent.com/u/11085755?v=4?s=72" width="72px;" alt=""/><br /><sub><b>De. Clare</b></sub></a><br /><a href="#content-Copay" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Hakuchuu"><img src="https://avatars2.githubusercontent.com/u/61411428?v=4?s=72" width="72px;" alt=""/><br /><sub><b>Hakuchuu</b></sub></a><br /><a href="#content-Hakuchuu" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ATKghost"><img src="https://avatars2.githubusercontent.com/u/3040439?v=4?s=72" width="72px;" alt=""/><br /><sub><b>ATKghost</b></sub></a><br /><a href="#content-ATKghost" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/zhihaofans"><img src="https://avatars3.githubusercontent.com/u/12581055?v=4?s=72" width="72px;" alt=""/><br /><sub><b>zhihaofans</b></sub></a><br /><a href="#content-zhihaofans" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yurix233"><img src="https://avatars1.githubusercontent.com/u/61882921?v=4?s=72" width="72px;" alt=""/><br /><sub><b>yurix233</b></sub></a><br /><a href="#content-yurix233" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/xijibache"><img src="https://avatars0.githubusercontent.com/u/58591924?v=4?s=72" width="72px;" alt=""/><br /><sub><b>xijibache</b></sub></a><br /><a href="#content-xijibache" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/okiseji"><img src="https://avatars0.githubusercontent.com/u/62046486?v=4?s=72" width="72px;" alt=""/><br /><sub><b>okiseji</b></sub></a><br /><a href="#content-okiseji" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/YukimuraAoi"><img src="https://avatars1.githubusercontent.com/u/46249138?v=4?s=72" width="72px;" alt=""/><br /><sub><b>YukimuraAoi</b></sub></a><br /><a href="#content-YukimuraAoi" title="Content">🖋</a></td>
    <td align="center"><a href="https://space.bilibili.com/1364366578"><img src="https://avatars.githubusercontent.com/u/62653664?v=4?s=72" width="72px;" alt=""/><br /><sub><b>DDs_moe</b></sub></a><br /><a href="#content-daBOSSer" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
