(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("e02716d9-d7d3-42fa-8b29-6af56090e8c4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e02716d9-d7d3-42fa-8b29-6af56090e8c4' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e142c163-d437-41b5-ba0f-c476887e1ebc":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"18640"},0,0]]},"id":"18862","type":"GridBox"},{"attributes":{"ticks":[1.275]},"id":"18800","type":"FixedTicker"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18856"},"selection_policy":{"id":"18855"}},"id":"18781","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"18664","type":"HoverTool"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18767","type":"Line"},{"attributes":{"data_source":{"id":"18781"},"glyph":{"id":"18782"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18783"},"view":{"id":"18785"}},"id":"18784","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18787","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18792","type":"Circle"},{"attributes":{},"id":"18824","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18758","type":"Line"},{"attributes":{},"id":"18823","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18778","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18768","type":"Line"},{"attributes":{},"id":"18855","type":"UnionRenderers"},{"attributes":{},"id":"18848","type":"Selection"},{"attributes":{"overlay":{"id":"18666"}},"id":"18661","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18763","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18783","type":"Line"},{"attributes":{},"id":"18810","type":"AllLabels"},{"attributes":{"source":{"id":"18791"}},"id":"18795","type":"CDSView"},{"attributes":{},"id":"18825","type":"UnionRenderers"},{"attributes":{},"id":"18850","type":"Selection"},{"attributes":{},"id":"18822","type":"Selection"},{"attributes":{"source":{"id":"18781"}},"id":"18785","type":"CDSView"},{"attributes":{"source":{"id":"18761"}},"id":"18765","type":"CDSView"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18799","type":"DataRange1d"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"18739"},{"id":"18744"},{"id":"18749"},{"id":"18754"},{"id":"18759"},{"id":"18764"},{"id":"18769"},{"id":"18774"},{"id":"18779"},{"id":"18784"},{"id":"18789"},{"id":"18794"}]},"id":"18804","type":"LegendItem"},{"attributes":{"data_source":{"id":"18746"},"glyph":{"id":"18747"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18748"},"view":{"id":"18750"}},"id":"18749","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"18657"},{"id":"18658"},{"id":"18659"},{"id":"18660"},{"id":"18661"},{"id":"18662"},{"id":"18663"},{"id":"18664"}]},"id":"18667","type":"Toolbar"},{"attributes":{"data_source":{"id":"18786"},"glyph":{"id":"18787"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18788"},"view":{"id":"18790"}},"id":"18789","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18751"},"glyph":{"id":"18752"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18753"},"view":{"id":"18755"}},"id":"18754","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18820"},"selection_policy":{"id":"18819"}},"id":"18691","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18741"},"glyph":{"id":"18742"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18743"},"view":{"id":"18745"}},"id":"18744","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18748","type":"Circle"},{"attributes":{"source":{"id":"18741"}},"id":"18745","type":"CDSView"},{"attributes":{"source":{"id":"18756"}},"id":"18760","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18773","type":"Line"},{"attributes":{"data_source":{"id":"18766"},"glyph":{"id":"18767"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18768"},"view":{"id":"18770"}},"id":"18769","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18826"},"selection_policy":{"id":"18825"}},"id":"18706","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18756"},"glyph":{"id":"18757"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18758"},"view":{"id":"18760"}},"id":"18759","type":"GlyphRenderer"},{"attributes":{},"id":"18663","type":"SaveTool"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18742","type":"Line"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"18679"},{"id":"18684"},{"id":"18689"},{"id":"18694"},{"id":"18699"},{"id":"18704"},{"id":"18709"},{"id":"18714"},{"id":"18719"},{"id":"18724"},{"id":"18729"},{"id":"18734"}]},"id":"18803","type":"LegendItem"},{"attributes":{},"id":"18849","type":"UnionRenderers"},{"attributes":{"source":{"id":"18766"}},"id":"18770","type":"CDSView"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18844"},"selection_policy":{"id":"18843"}},"id":"18751","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18852"},"selection_policy":{"id":"18851"}},"id":"18771","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18776"}},"id":"18780","type":"CDSView"},{"attributes":{"data_source":{"id":"18791"},"glyph":{"id":"18792"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18793"},"view":{"id":"18795"}},"id":"18794","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18854"},"selection_policy":{"id":"18853"}},"id":"18776","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18757","type":"Line"},{"attributes":{"data_source":{"id":"18776"},"glyph":{"id":"18777"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18778"},"view":{"id":"18780"}},"id":"18779","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"18864"},{"id":"18862"}]},"id":"18865","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18753","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18860"},"selection_policy":{"id":"18859"}},"id":"18791","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18786"}},"id":"18790","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18702","type":"Circle"},{"attributes":{},"id":"18808","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18793","type":"Circle"},{"attributes":{},"id":"18826","type":"Selection"},{"attributes":{"toolbars":[{"id":"18667"}],"tools":[{"id":"18657"},{"id":"18658"},{"id":"18659"},{"id":"18660"},{"id":"18661"},{"id":"18662"},{"id":"18663"},{"id":"18664"}]},"id":"18863","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18738","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18737","type":"Line"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18840"},"selection_policy":{"id":"18839"}},"id":"18741","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18772","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18848"},"selection_policy":{"id":"18847"}},"id":"18761","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18746"}},"id":"18750","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18743","type":"Line"},{"attributes":{},"id":"18662","type":"UndoTool"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18858"},"selection_policy":{"id":"18857"}},"id":"18786","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18736"}},"id":"18740","type":"CDSView"},{"attributes":{"source":{"id":"18751"}},"id":"18755","type":"CDSView"},{"attributes":{"data_source":{"id":"18761"},"glyph":{"id":"18762"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18763"},"view":{"id":"18765"}},"id":"18764","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18782","type":"Line"},{"attributes":{},"id":"18820","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18762","type":"Circle"},{"attributes":{"source":{"id":"18771"}},"id":"18775","type":"CDSView"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18846"},"selection_policy":{"id":"18845"}},"id":"18756","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18771"},"glyph":{"id":"18772"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18773"},"view":{"id":"18775"}},"id":"18774","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18842"},"selection_policy":{"id":"18841"}},"id":"18746","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18752","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18777","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18747","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18788","type":"Line"},{"attributes":{},"id":"18821","type":"UnionRenderers"},{"attributes":{"axis":{"id":"18653"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"18656","type":"Grid"},{"attributes":{"data_source":{"id":"18681"},"glyph":{"id":"18682"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18683"},"view":{"id":"18685"}},"id":"18684","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18701"}},"id":"18705","type":"CDSView"},{"attributes":{"source":{"id":"18686"}},"id":"18690","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18692","type":"Line"},{"attributes":{"source":{"id":"18706"}},"id":"18710","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18677","type":"Line"},{"attributes":{"above":[{"id":"18802"}],"below":[{"id":"18649"}],"center":[{"id":"18652"},{"id":"18656"}],"height":348,"left":[{"id":"18653"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"18679"},{"id":"18684"},{"id":"18689"},{"id":"18694"},{"id":"18699"},{"id":"18704"},{"id":"18709"},{"id":"18714"},{"id":"18719"},{"id":"18724"},{"id":"18729"},{"id":"18734"},{"id":"18739"},{"id":"18744"},{"id":"18749"},{"id":"18754"},{"id":"18759"},{"id":"18764"},{"id":"18769"},{"id":"18774"},{"id":"18779"},{"id":"18784"},{"id":"18789"},{"id":"18794"}],"title":{"id":"18796"},"toolbar":{"id":"18667"},"toolbar_location":null,"width":450,"x_range":{"id":"18798"},"x_scale":{"id":"18645"},"y_range":{"id":"18799"},"y_scale":{"id":"18647"}},"id":"18640","subtype":"Figure","type":"Plot"},{"attributes":{"data":{},"selected":{"id":"18836"},"selection_policy":{"id":"18835"}},"id":"18731","type":"ColumnDataSource"},{"attributes":{},"id":"18836","type":"Selection"},{"attributes":{"toolbar":{"id":"18863"},"toolbar_location":"above"},"id":"18864","type":"ToolbarBox"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18698","type":"Line"},{"attributes":{},"id":"18846","type":"Selection"},{"attributes":{"data_source":{"id":"18706"},"glyph":{"id":"18707"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18708"},"view":{"id":"18710"}},"id":"18709","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18832"},"selection_policy":{"id":"18831"}},"id":"18721","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18727","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18717","type":"Circle"},{"attributes":{},"id":"18854","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18687","type":"Circle"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18834"},"selection_policy":{"id":"18833"}},"id":"18726","type":"ColumnDataSource"},{"attributes":{},"id":"18817","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18683","type":"Line"},{"attributes":{},"id":"18852","type":"Selection"},{"attributes":{"formatter":{"id":"18806"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18807"},"ticker":{"id":"18800"}},"id":"18653","type":"LinearAxis"},{"attributes":{"source":{"id":"18676"}},"id":"18680","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18693","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18830"},"selection_policy":{"id":"18829"}},"id":"18716","type":"ColumnDataSource"},{"attributes":{},"id":"18814","type":"Selection"},{"attributes":{"source":{"id":"18721"}},"id":"18725","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18838"},"selection_policy":{"id":"18837"}},"id":"18736","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18716"},"glyph":{"id":"18717"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18718"},"view":{"id":"18720"}},"id":"18719","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18665","type":"BoxAnnotation"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18822"},"selection_policy":{"id":"18821"}},"id":"18696","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18726"}},"id":"18730","type":"CDSView"},{"attributes":{},"id":"18845","type":"UnionRenderers"},{"attributes":{"source":{"id":"18696"}},"id":"18700","type":"CDSView"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18850"},"selection_policy":{"id":"18849"}},"id":"18766","type":"ColumnDataSource"},{"attributes":{},"id":"18828","type":"Selection"},{"attributes":{},"id":"18645","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18708","type":"Line"},{"attributes":{"overlay":{"id":"18665"}},"id":"18659","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18732","type":"Circle"},{"attributes":{},"id":"18807","type":"AllLabels"},{"attributes":{"data_source":{"id":"18701"},"glyph":{"id":"18702"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18703"},"view":{"id":"18705"}},"id":"18704","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18681"}},"id":"18685","type":"CDSView"},{"attributes":{},"id":"18813","type":"UnionRenderers"},{"attributes":{"source":{"id":"18716"}},"id":"18720","type":"CDSView"},{"attributes":{},"id":"18650","type":"BasicTicker"},{"attributes":{"data_source":{"id":"18686"},"glyph":{"id":"18687"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18688"},"view":{"id":"18690"}},"id":"18689","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18678","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18682","type":"Line"},{"attributes":{},"id":"18857","type":"UnionRenderers"},{"attributes":{"source":{"id":"18691"}},"id":"18695","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18728","type":"Line"},{"attributes":{},"id":"18815","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18691"},"glyph":{"id":"18692"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18693"},"view":{"id":"18695"}},"id":"18694","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18666","type":"PolyAnnotation"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18814"},"selection_policy":{"id":"18813"}},"id":"18676","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18731"}},"id":"18735","type":"CDSView"},{"attributes":{},"id":"18838","type":"Selection"},{"attributes":{},"id":"18657","type":"ResetTool"},{"attributes":{},"id":"18832","type":"Selection"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18828"},"selection_policy":{"id":"18827"}},"id":"18711","type":"ColumnDataSource"},{"attributes":{},"id":"18856","type":"Selection"},{"attributes":{},"id":"18830","type":"Selection"},{"attributes":{},"id":"18660","type":"WheelZoomTool"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18722","type":"Line"},{"attributes":{"data_source":{"id":"18736"},"glyph":{"id":"18737"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18738"},"view":{"id":"18740"}},"id":"18739","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18718","type":"Circle"},{"attributes":{},"id":"18841","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18676"},"glyph":{"id":"18677"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18678"},"view":{"id":"18680"}},"id":"18679","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18688","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18723","type":"Line"},{"attributes":{},"id":"18816","type":"Selection"},{"attributes":{},"id":"18829","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18733","type":"Circle"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18816"},"selection_policy":{"id":"18815"}},"id":"18681","type":"ColumnDataSource"},{"attributes":{},"id":"18835","type":"UnionRenderers"},{"attributes":{},"id":"18859","type":"UnionRenderers"},{"attributes":{},"id":"18851","type":"UnionRenderers"},{"attributes":{},"id":"18842","type":"Selection"},{"attributes":{},"id":"18819","type":"UnionRenderers"},{"attributes":{},"id":"18847","type":"UnionRenderers"},{"attributes":{},"id":"18853","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18712","type":"Line"},{"attributes":{},"id":"18844","type":"Selection"},{"attributes":{},"id":"18658","type":"PanTool"},{"attributes":{"data_source":{"id":"18731"},"glyph":{"id":"18732"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18733"},"view":{"id":"18735"}},"id":"18734","type":"GlyphRenderer"},{"attributes":{},"id":"18806","type":"BasicTickFormatter"},{"attributes":{},"id":"18831","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"18803"},{"id":"18804"}],"location":"top_left"},"id":"18802","type":"Legend"},{"attributes":{"data_source":{"id":"18726"},"glyph":{"id":"18727"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18728"},"view":{"id":"18730"}},"id":"18729","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18703","type":"Circle"},{"attributes":{},"id":"18818","type":"Selection"},{"attributes":{},"id":"18833","type":"UnionRenderers"},{"attributes":{},"id":"18843","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18721"},"glyph":{"id":"18722"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18723"},"view":{"id":"18725"}},"id":"18724","type":"GlyphRenderer"},{"attributes":{},"id":"18837","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18696"},"glyph":{"id":"18697"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18698"},"view":{"id":"18700"}},"id":"18699","type":"GlyphRenderer"},{"attributes":{},"id":"18834","type":"Selection"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18798","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18711"},"glyph":{"id":"18712"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18713"},"view":{"id":"18715"}},"id":"18714","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"18808"},"major_label_policy":{"id":"18810"},"ticker":{"id":"18650"}},"id":"18649","type":"LinearAxis"},{"attributes":{"data":{},"selected":{"id":"18818"},"selection_policy":{"id":"18817"}},"id":"18686","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18711"}},"id":"18715","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18707","type":"Line"},{"attributes":{},"id":"18860","type":"Selection"},{"attributes":{},"id":"18858","type":"Selection"},{"attributes":{},"id":"18840","type":"Selection"},{"attributes":{},"id":"18647","type":"LinearScale"},{"attributes":{"axis":{"id":"18649"},"ticker":null},"id":"18652","type":"Grid"},{"attributes":{},"id":"18827","type":"UnionRenderers"},{"attributes":{},"id":"18839","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18697","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18824"},"selection_policy":{"id":"18823"}},"id":"18701","type":"ColumnDataSource"},{"attributes":{"text":"94.0% HDI"},"id":"18796","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18713","type":"Line"}],"root_ids":["18865"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"e142c163-d437-41b5-ba0f-c476887e1ebc","root_ids":["18865"],"roots":{"18865":"e02716d9-d7d3-42fa-8b29-6af56090e8c4"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();