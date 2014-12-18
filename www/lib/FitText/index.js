



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>davatron5000/FitText.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="davatron5000/FitText.js" name="twitter:title" /><meta content="FitText.js - A jQuery plugin for inflating web type" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" property="og:image" /><meta content="davatron5000/FitText.js" property="og:title" /><meta content="https://github.com/davatron5000/FitText.js" property="og:url" /><meta content="FitText.js - A jQuery plugin for inflating web type" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="3235A4FB:24A6:A98CDE:54927D01" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="/3pTRv46DbDOWZpy22MV3ZXp6/Rmvin5EEo7D5+6YNyQ3KyBE8z6EZz+tgOKMhErQ60wWrkt+SNvEnPfAvQg9w==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-9bcf5def7eb44e2a101b20aaecf3707f4b0a10ab8f4d6eebec29371f821c4b29.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-1446f9e607097a307c3d44a31ad51f6b8b07941ac45562372f6f69c8a7cde28e.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="0df57943a50e1293949355ccdf795e2f">

      
  <meta name="description" content="FitText.js - A jQuery plugin for inflating web type">
  <meta name="go-import" content="github.com/davatron5000/FitText.js git https://github.com/davatron5000/FitText.js.git">

  <meta content="42218" name="octolytics-dimension-user_id" /><meta content="davatron5000" name="octolytics-dimension-user_login" /><meta content="1706871" name="octolytics-dimension-repository_id" /><meta content="davatron5000/FitText.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1706871" name="octolytics-dimension-repository_network_root_id" /><meta content="davatron5000/FitText.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/davatron5000/FitText.js/commits/master.atom" rel="alternate" title="Recent Commits to FitText.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button" href="/login?return_to=%2Fdavatron5000%2FFitText.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/davatron5000/FitText.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/davatron5000/FitText.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitText.js"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/davatron5000/FitText.js/stargazers">
      4,880
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitText.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/davatron5000/FitText.js/network" class="social-count">
        1,100
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/davatron5000" class="url fn" itemprop="url" rel="author"><span itemprop="title">davatron5000</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/davatron5000/FitText.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">FitText.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/davatron5000/FitText.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/davatron5000/FitText.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /davatron5000/FitText.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/davatron5000/FitText.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /davatron5000/FitText.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/davatron5000/FitText.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /davatron5000/FitText.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/davatron5000/FitText.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /davatron5000/FitText.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/davatron5000/FitText.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /davatron5000/FitText.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/davatron5000/FitText.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/davatron5000/FitText.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/davatron5000/FitText.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of davatron5000/FitText.js as a zip file"
                   title="Download the contents of davatron5000/FitText.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      A jQuery plugin for inflating web type
    </div>

    <div class="repository-website">
      <p><a href="http://fittextjs.com" rel="nofollow">http://fittextjs.com</a></p>
    </div>


</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/davatron5000/FitText.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              55
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/davatron5000/FitText.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            3
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/davatron5000/FitText.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            1
          </span>
          release
        </a>
      </li>

      <li>
        
  <a href="/davatron5000/FitText.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      16
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/davatron5000/FitText.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#f1e05a">
  <span class="language-color" style="width:100%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    </a>
  </div>

<include-fragment src="/davatron5000/FitText.js/show_partial?partial=recently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/davatron5000/FitText.js/find/master"
        class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/davatron5000/FitText.js/compare" aria-label="Compare, review, create a pull request" class="minibutton primary tooltipped tooltipped-s left compare-button" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitText.js/tree/gh-pages"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitText.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitText.js/tree/min-font-size"
                 data-name="min-font-size"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="min-font-size">min-font-size</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitText.js/tree/v1.2.0"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davatron5000/FitText.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">FitText.js</span></a></span></span><span class="separator">/</span><form action="/login?return_to=%2Fdavatron5000%2FFitText.js" aria-label="Sign in to make or propose changes" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Sign in to make or propose changes" class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/davatron5000/FitText.js/commit/07374d7ade72e7c340a267c6285f96be57435792" class="message" data-pjax="true" title="Merge pull request #125 from arthurvr/patch-1

Missing semicolon">Merge pull request</a> <a href="https://github.com/davatron5000/FitText.js/pull/125" class="issue-link" title="Missing semicolon">#125</a> <a href="/davatron5000/FitText.js/commit/07374d7ade72e7c340a267c6285f96be57435792" class="message" data-pjax="true" title="Merge pull request #125 from arthurvr/patch-1

Missing semicolon">from arthurvr/patch-1</a>
        <span class="hidden-text-expander inline"><a href="#" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>Missing semicolon</pre></div>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="07374d7ade72e7c340a267c6285f96be57435792" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/davatron5000/FitText.js/commit/07374d7ade72e7c340a267c6285f96be57435792" class="sha-block" data-pjax>latest commit <span class="sha">07374d7ade</span></a>

      <div class="authorship">
        <img alt="Dave Rupert" class="avatar" data-user="42218" height="20" src="https://avatars1.githubusercontent.com/u/42218?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/davatron5000" rel="author">davatron5000</a></span>
        authored <time class="updated" datetime="2014-11-25T19:10:48Z" is="relative-time">Nov 25, 2014</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitText.js/blob/master/CONTRIBUTING.md" class="js-directory-link" id="6a3371457528722a734f3c51d9238c13-2e18c0a114e305647ac870ff49d7f3731c5cce80" title="CONTRIBUTING.md">CONTRIBUTING.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitText.js/commit/b425cbccc03c7b0a56e7025186e219cf660de221" class="message" data-pjax="true" title="Issue Submission Guidelines

Establishing guideslines for new issues.

+ Reduced test case required">Issue Submission Guidelines</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-08-21T01:55:39Z" is="time-ago">Aug 20, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitText.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-d23119a5edad863f98d845e3e7998b6e5d3709c2" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitText.js/commit/3224e4026e8022d8924c0e21729a1a02b14aa959" class="message" data-pjax="true" title="Missing semicolons">Missing semicolons</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-11-25T19:09:45Z" is="time-ago">Nov 25, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitText.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-44dfb6198bde10a582618d244c7f7d3a5b566fb7" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitText.js/commit/c697154b63ff0394cee408d3bc5925d1308a9a20" class="message" data-pjax="true" title="fixing bower ignore file">fixing bower ignore file</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-10-14T00:35:03Z" is="time-ago">Oct 13, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitText.js/blob/master/example.html" class="js-directory-link" id="62ad28cc71ae9a54a611bc2d551533f6-c6a2aee77c8eb05890e10a269d85647cf329377b" title="example.html">example.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitText.js/commit/e291b8acaed29c8b9eb5c46d44133b29f3fce8b3" class="message" data-pjax="true" title="Update example.html

value of minFontSize didn&#39;t match maxFontSize.">Update example.html</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-01-17T17:06:35Z" is="time-ago">Jan 17, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/davatron5000/FitText.js/blob/master/jquery.fittext.js" class="js-directory-link" id="a22044f8eea35f18c829eec4c93ba714-0b3ddeffe8e7a33158aaaf83ec09a278605ab640" title="jquery.fittext.js">jquery.fittext.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/davatron5000/FitText.js/commit/c5dc80ff858ba531f0b542c51b5648fe0e00aeef" class="message" data-pjax="true" title="Update jquery.fittext.js

Update version number">Update jquery.fittext.js</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-01-29T20:07:46Z" is="time-ago">Jan 29, 2014</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-fittextjs-a-jquery-plugin-for-inflating-web-type" class="anchor" href="#fittextjs-a-jquery-plugin-for-inflating-web-type" aria-hidden="true"><span class="octicon octicon-link"></span></a>FitText.js, a jQuery plugin for inflating web type</h1>

<p>FitText makes font-sizes flexible. Use this plugin on your responsive design for ratio-based resizing of your headlines.</p>

<h2>
<a id="user-content-how-it-works" class="anchor" href="#how-it-works" aria-hidden="true"><span class="octicon octicon-link"></span></a>How it works</h2>

<p>Here is a simple FitText setup:</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>jquery.fittext.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
<span class="pl-s2">&lt;<span class="pl-ent">script</span>&gt;</span>
<span class="pl-s2">  jQuery(<span class="pl-s1"><span class="pl-pds">"</span>#responsive_headline<span class="pl-pds">"</span></span>).fitText();</span>
<span class="pl-s2">&lt;/<span class="pl-ent">script</span>&gt;</span></pre></div>

<p>Your text should now fluidly resize, by default: Font-size = 1/10th of the element's width.</p>

<h2>
<a id="user-content-the-compressor" class="anchor" href="#the-compressor" aria-hidden="true"><span class="octicon octicon-link"></span></a>The Compressor</h2>

<p>If your text is resizing poorly, you'll want to turn tweak up/down "The Compressor". It works a little like a guitar amp. The default is <code>1</code>.</p>

<div class="highlight highlight-javascript"><pre>jQuery(<span class="pl-s1"><span class="pl-pds">"</span>#responsive_headline<span class="pl-pds">"</span></span>).fitText(<span class="pl-c1">1.2</span>); <span class="pl-c">// Turn the compressor up   (resizes more aggressively)</span>
jQuery(<span class="pl-s1"><span class="pl-pds">"</span>#responsive_headline<span class="pl-pds">"</span></span>).fitText(<span class="pl-c1">0.8</span>); <span class="pl-c">// Turn the compressor down (resizes less aggressively)</span></pre></div>

<p>This will hopefully give you a level of "control" that might not be pixel perfect, but resizes smoothly &amp; nicely.</p>

<h2>
<a id="user-content-minfontsize--maxfontsize" class="anchor" href="#minfontsize--maxfontsize" aria-hidden="true"><span class="octicon octicon-link"></span></a>minFontSize &amp; maxFontSize</h2>

<p>FitText now allows you to specify two optional pixel values: <code>minFontSize</code> and <code>maxFontSize</code>. Great for situations when you want to preserve hierarchy.</p>

<div class="highlight highlight-javascript"><pre>jQuery(<span class="pl-s1"><span class="pl-pds">"</span>#responsive_headline<span class="pl-pds">"</span></span>).fitText(<span class="pl-c1">1.2</span>, { minFontSize<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>20px<span class="pl-pds">'</span></span>, maxFontSize<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>40px<span class="pl-pds">'</span></span> });</pre></div>

<h2>
<a id="user-content-css-faq" class="anchor" href="#css-faq" aria-hidden="true"><span class="octicon octicon-link"></span></a>CSS FAQ</h2>

<ul class="task-list">
<li>
<strong>Make sure your container has a width!</strong>

<ul class="task-list">
<li>
<code>display: inline</code> elements don't have a width. Use <code>display: block</code> OR <code>display: inline-block</code>+ a specified width (i.e. <code>width: 100%</code>).</li>
<li>
<code>position:absolute</code> elements need a specified width as well.</li>
</ul>
</li>
<li>Tweak until you like it.</li>
<li>Set a No-JS fallback font-size in your CSS.</li>
</ul>

<h2>
<a id="user-content-dont-use-jquery" class="anchor" href="#dont-use-jquery" aria-hidden="true"><span class="octicon octicon-link"></span></a>Don't use jQuery?</h2>

<p>That's okay. Check out these handy non-jQuery versions maintained by other people.</p>

<ul class="task-list">
<li>
<a href="https://github.com/adactio/FitText.js">non-jQuery FitText</a> from @adactio</li>
<li>
<a href="https://github.com/patrickmarabeas/AngularJS-FitText.js">Angular.js FitText.js</a> from @patrickmarabeas</li>
</ul>

<h2>
<a id="user-content-changelog" class="anchor" href="#changelog" aria-hidden="true"><span class="octicon octicon-link"></span></a>Changelog</h2>

<ul class="task-list">
<li>
<code>v 1.2</code> - Added <code>onorientationchange</code> event</li>
<li>
<code>v 1.1</code> - FitText now ignores font-size and has minFontSize &amp; maxFontSize options</li>
<li>
<code>v 1.0.1</code> - Fix for broken font-size.</li>
<li>
<code>v 1.0</code> - Initial Release</li>
</ul>

<h2>
<a id="user-content-in-use" class="anchor" href="#in-use" aria-hidden="true"><span class="octicon octicon-link"></span></a>In Use:</h2>

<ul class="task-list">
<li><a href="http://trentwalton.com">Trent Walton</a></li>
</ul>

<p>If you want more exact fitting text, there are plugins for that! We recommend checking out <a href="https://github.com/zachleat/BigText">BigText</a> by Zach Leatherman or <a href="https://github.com/freqDec/slabText">SlabText</a> by Brian McAllister.</p>

<h3>
<a id="user-content-download-fork-commit" class="anchor" href="#download-fork-commit" aria-hidden="true"><span class="octicon octicon-link"></span></a>Download, Fork, Commit.</h3>

<p>If you think you can make this better, please Download, Fork, &amp; Commit. We'd love to see your ideas.</p>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04673s from github-fe141-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fc447938e306b7b2c26a33cfee9dfda9052aeb1aa6ad84b72f1b35fd008efe9e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-77fd7bede3019a6f465dfa188ef8e672779d747b31c394bb3f02c6a29cf3430c.js" type="text/javascript"></script>
      
      
  </body>
</html>

