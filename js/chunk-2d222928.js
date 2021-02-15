(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222928"],{ced4:function(e,o,n){"use strict";n.r(o);var t={back:"返回",next:"下一个",enable:"启用",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"日志记录",reverseProxy:"反向代理",reverseProxyLower:"反向代理",restrict:"限制",path:"路径"},r=n("5ad9"),i={title:t.nginx+" 配置",description:`配置高性能、安全、稳定的${t.nginx}服务器的最简单方法。`,singleColumnMode:"垂直模式",splitColumnMode:"水平模式",perWebsiteConfig:"站点配置",addSite:"添加站点",globalConfig:"全局配置",setup:"使用配置",configFiles:"配置文件"},s={downloadConfig:"下载配置",copyBase64:"复制Base64"},a={backToTop:"返回顶部",thisToolIs:"这个工具",openSourceOnGitHub:"开源在GitHub上",underThe:"是",mit:"MIT",license:"许可!",weWelcomeFeedbackAndContributions:"我们欢迎您提供反馈和意见。",originallyCreatedBy:"最初创建者",balintSzekeres:"Bálint Szekeres",maintainedBy:"维护者",digitalOcean:"DigitalOcean"},l={enableEncryptedSslConnection:`${t.enable}加密的${t.ssl}连接`,http2:t.http+"/2",enableHttp2Connections:`${t.enable} ${t.http}/2 连接`,forceHttps:"强制 "+t.https,hsts:"HSTS",enableStrictTransportSecurity:t.enable+"HSTS（强制客户端、浏览器等使用 HTTPS 与服务器创建链接），需要HTTPS连接",enableIncludeSubDomains:t.enable+"includeSubDomains指令，HSTS对所有子域生效",enablePreload:t.enable+"preload指令, 强制客户端只可以使用https连接",certificationType:"证书类型",customCertificate:"本地证书",letsEncryptEmail:t.letsEncrypt+" 邮箱"},p={byDomain:"在此站点",enableForThisDomain:"为此站点"+t.enable},c={phpIsDisabled:t.php+"已禁用。",phpCannotBeEnabledWithReverseProxy:`${t.php}在启用${t.reverseProxy}时无法启用。`,phpCannotBeEnabledWithPython:`${t.php} 在启用${t.python}时无法启用。`,enablePhp:`${t.enable} ${t.php}`,wordPressRules:t.wordPress+" 规则",enableWordPressRules:`${t.enable} ${t.wordPress}专属规则`,drupalRules:t.drupal+" 规则",enableDrupalRules:`${t.enable} ${t.drupal}专属规则`,magentoRules:t.magento+" 规则",enableMagentoRules:`${t.enable} ${t.magento}专属规则`,joomlaRules:t.joomla+" 规则",enableJoomlaRules:`${t.enable} ${t.joomla}专属规则`},d={presets:"预设",itLooksLikeYouCustomisedTheConfig:"看起来您已经为这个站点定制了配置。选择新的预设可能会重置或更改一些您已经定制的设置。",frontend:"前端",nodeJs:"Node.js",singlePageApplication:"单页面应用"},u={pythonIsDisabled:t.python+"已禁用。",pythonCannotBeEnabledWithReverseProxy:`${t.python}在启用${t.reverseProxy}时无法启用。`,pythonCannotBeEnabledWithPhp:`${t.python}在启用${t.php}时无法启用。`,enablePython:`${t.enable} ${t.python}`,djangoRules:t.django+" 规则",enableDjangoRules:`${t.enable} ${t.django}专属规则`},g={reverseProxyIsDisabled:t.reverseProxy+"已禁用。",reverseProxyCannotBeEnabledWithPhp:`${t.reverseProxy}在启用${t.php}时无法启用。`,reverseProxyCannotBeEnabledWithPython:`${t.reverseProxy}在启用${t.python}时无法启用。`,enableReverseProxy:`${t.enable} ${t.reverseProxyLower}`},b={fallbackRouting:"回调路由",fallbackRoutingPhpPath:`回调路由${t.php}路径`,legacyPhpRouting:`传统${t.php}路由`,enableLegacyRouting:t.enable+"传统路由",routing:"路由设置"},h={domain:"站点",documentRoot:"运行目录",oneOrMoreOtherDomainsAreAlsoNamed:"发现了重复的域名",thisWillCauseIssuesWithConfigGeneration:"这将导致生成配置出现问题。",wwwSubdomain:"www 子域名",cdnSubdomain:"CDN 子域名",redirectSubdomains:"子域名重定向",server:"服务",listen:"监听"},m={disableForThisDomain:"在此站点上禁用",responseCode:"响应代码"};const y="洋葱";var C={onion:y,onionLocation:y+"位置",provideAnOnionLocationToSetOnionLocationHeader:"提供一个洋葱位置地址，为您的站点设置洋葱协议头。",letsVisitorsKnownOnionServicesIsAvailable:"这可以让访问者知道你的网站的洋葱服务版本可用于Tor浏览器。",learnMoreAboutOnionServices:"了解有关洋葱服务的更多信息",onionLocationExpectedToEndWithOnion:"洋葱位置地址通常以.onion结尾。"},$={https:l,logging:p,php:c,presets:d,python:u,reverseProxy:g,routing:b,server:h,restrict:m,onion:C};const S="Mozilla",v="IPv4",f="IPv6";var P={sslProfile:t.ssl+"配置",httpsMustBeEnabledOnOneSite:`必须在至少一个站点上启用${t.https}才能配置全局${t.https}设置。`,ocspDnsResolvers:"OCSP DNS解析器",cloudflareResolver:"Cloudflare解析器",googlePublicDns:"谷歌公共DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:t.letsEncrypt+" Web根目录",letsEncryptCertRoot:t.letsEncrypt+"证书目录",mozillaModern:S+" Modern",mozillaIntermediate:S+" Intermediate",mozillaOld:S+" Old",ipv4Only:""+v,ipv6Only:""+f,ipv4AndIpv6:`${v} & ${f}`},x={enableFileNotFoundErrorLogging:t.enable+"“文件未找到”错误日志：",logformat:"log_format",enableCloudflare:"将Cloudflare请求头部添加到默认日志格式",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},k={nginxConfigDirectory:t.nginx+"配置目录",mb:"MB"},D={gzipCompression:"Gzip 压缩",enableGzipCompression:t.enable+"Gzip压缩",brotliCompression:"Brotli 压缩",enableBrotliCompression:t.enable+"brotli压缩",expirationForAssets:"资源有效期",expirationForMedia:"媒体资源有效期",expirationForSvgs:"SVGs有效期",expirationForFonts:"字体有效期",performance:"性能"},T={phpServer:t.php+" 服务",phpMustBeEnabledOnOneSite:`必须在至少一个站点上启用${t.php}才能配置全局${t.php}设置。`,phpBackupServer:t.php+"备份服务器",tcp:"TCP",hhvmSocket:"HHVM socket",php5Socket:"5.x socket",php70Socket:"7.0 socket",php71Socket:"7.1 socket",php72Socket:"7.2 socket",php73Socket:"7.3 socket",php74Socket:"7.4 socket",php80Socket:"8.0 socket",phpSocket:"PHP socket",custom:"自定义",disabled:"禁用"},w={pythonServer:t.python+" 服务",pythonMustBeEnabledOnOneSite:`必须在至少一个站点上启用${t.python}才能配置全局${t.python}设置。`},O={reverseProxyMustBeEnabledOnOneSite:`必须在至少一个站点上启用${t.reverseProxy}才能配置全局${t.reverseProxy}设置。`,seconds:"秒"},E={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`当使用${t.wordPress}时，, <code class="slim">'unsafe-eval'</code>经常需要在内容安全策略中，以允许管理面板的功能正确。`,security:"安全"},F={modularizedStructure:"模块化结构",enableModularizedConfigFiles:t.enable+"模块化的配置文件",symlinkVhost:"符号链接 vhost",enableSymLinksFrom:t.enable+"符号链接",to:"到",shareConfiguration:"分享配置",resetConfiguration:"重置配置",resetGlobalConfig:"重置全局配置",resetAllDomains:"重置所有站点",resetAllDomainsConfig:"重置所有站点",removeAllDomains:"删除所有站点",resetDomainConfig:"重置站点配置",removeDomain:"删除站点",yesImSure:"好的",noCancel:"取消",tools:"工具",resetGlobalConfigBody:"您确定要重置全局配置部分中的所有配置选项吗?",resetAllDomainsConfigBody:"您确定要重置所有站点的配置吗?",removeAllDomainsBody:"您确定要删除所有站点的配置吗?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"您确定要重置",domain:"站点的所有配置选项吗?",areYouSureYouWantToRemoveThe:"你确定要删除",domainConfiguration:"的站点配置吗？"};const I="Docker",R="Dockerfile";var B={docker:I,dockerfile:R,dockerCompose:I+" 编排服务",applyDockerTweaks:`应用${I}调整`,applyDockerTweaksForNginx:`为使用${I}运行${t.nginx}进行配置调整。`,applyDockerTweaksExplainer:`将${t.nginx}用户更新为<code class="slim">nginx</code>，将pid更新为<code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`生成${R}运行${t.nginx}与${I}`,includeDockerCompose:`生成docker-compose.yaml来运行${t.nginx} docker-compose`},A={https:P,logging:x,nginx:k,performance:D,php:T,python:w,reverseProxy:O,security:E,tools:F,docker:B};const L="Certbot";var N={commentOutSslDirectivesInConfiguration:`注释掉配置中的${t.ssl}相关指令:`,reloadYourNginxServer:`重新加载你的${t.nginx}服务器:`,obtainSslCertificatesFromLetsEncrypt:`使用${L}从 ${t.letsEncrypt} 获得${t.ssl}证书:`,uncommentSslDirectivesInConfiguration:`在配置中取消注释${t.ssl}相关指令:`,configureCertbotToReloadNginxOnCertificateRenewal:`配置${L}，当${t.nginx}成功更新证书时重新加载:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${L}不需要为您的${t.nginx}配置进行设置。 `,certbot:L},H={downloadTheGeneratedConfig:"<b>下载</b> 生成的配置:",andUploadItToYourServers:"然后 <b>上传</b> 到你的服务器的",directory:"目录.",or:"或, ",copyBase64StringOfCompressedConfig:"复制压缩配置的base64字符串",pasteItInYourServersCommandLineAndExecute:"，将其粘贴到服务器的命令行并执行。",navigateToYourNginxConfigurationDirectoryOnYourServer:`进入你的 ${t.nginx}服务器上的<b>配置目录</b>:`,createABackupOfYourCurrentNginxConfiguration:`创建当前${t.nginx}配置的<b>备份</b>:`,extractTheNewCompressedConfigurationArchiveUsingTar:"使用tar<b>解压</b>新的压缩配置",download:"下载"},M={letsGoLive:"让我们开始吧！",reloadNginxToLoadInYourNewConfiguration:`重新加载${t.nginx}以载入新的配置:`,goLive:"上线！"},W={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"在您的服务器上运行此命令生成<b>Diffie-Hellman keys</b>:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`创建一个通用的<b>ACME-challenge</b>目录(用于 <b>${t.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`无需任何操作，即可为您的${t.nginx}完成${t.ssl}配置`,sslInit:t.ssl+" 初始化"},G={certbot:N,download:H,goLive:M,ssl:W},Y={lookingForAPlaceToDeploy:"👋 在寻找部署新配置的地方？",tryOutDigitalOceansDroplet:"试用用于Nginx的DigitalOcean的LEMP Droplet。"},z={wantToContributeChanges:"👋 想要申请新的功能，提出修改意见，或将该工具翻译成新的语言？",getInvolvedOnGitHub:"在GitHub上参与进来"},j={droplet:Y,contribute:z},V={app:i,setup:s,footer:a,domainSections:$,globalSections:A,setupSections:G,callouts:j};o["default"]={common:t,languages:r["default"],templates:V}}}]);