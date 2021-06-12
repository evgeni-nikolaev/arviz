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
    
      
      
    
      var element = document.getElementById("8deb7a93-b380-4d5b-943b-07b0c606f59f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8deb7a93-b380-4d5b-943b-07b0c606f59f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f621dac3-f5f0-498f-bbb1-8210d13d8abf":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"18316"},"glyph":{"id":"18317"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18318"},"view":{"id":"18320"}},"id":"18319","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18337"},"selection_policy":{"id":"18336"}},"id":"18301","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18290","type":"BoxAnnotation"},{"attributes":{},"id":"18285","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18313","type":"Line"},{"attributes":{},"id":"18338","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"18282"},{"id":"18283"},{"id":"18284"},{"id":"18285"},{"id":"18286"},{"id":"18287"},{"id":"18288"},{"id":"18289"}]},"id":"18292","type":"Toolbar"},{"attributes":{},"id":"18272","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18339"},"selection_policy":{"id":"18338"}},"id":"18306","type":"ColumnDataSource"},{"attributes":{},"id":"18279","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18289","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18303","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18291","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18341"},"selection_policy":{"id":"18340"}},"id":"18311","type":"ColumnDataSource"},{"attributes":{},"id":"18331","type":"BasicTickFormatter"},{"attributes":{},"id":"18333","type":"AllLabels"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18321","type":"Span"},{"attributes":{"data_source":{"id":"18306"},"glyph":{"id":"18307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18308"},"view":{"id":"18310"}},"id":"18309","type":"GlyphRenderer"},{"attributes":{},"id":"18340","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18311"},"glyph":{"id":"18312"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18313"},"view":{"id":"18315"}},"id":"18314","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18302","type":"Circle"},{"attributes":{},"id":"18268","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18301"},"glyph":{"id":"18302"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18303"},"view":{"id":"18305"}},"id":"18304","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18343"},"selection_policy":{"id":"18342"}},"id":"18316","type":"ColumnDataSource"},{"attributes":{},"id":"18282","type":"ResetTool"},{"attributes":{"source":{"id":"18306"}},"id":"18310","type":"CDSView"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18304"},{"id":"18309"}]},"id":"18323","type":"LegendItem"},{"attributes":{"children":[{"id":"18347"},{"id":"18345"}]},"id":"18348","type":"Column"},{"attributes":{"axis":{"id":"18278"},"dimension":1,"ticker":null},"id":"18281","type":"Grid"},{"attributes":{},"id":"18343","type":"Selection"},{"attributes":{"overlay":{"id":"18291"}},"id":"18286","type":"LassoSelectTool"},{"attributes":{"source":{"id":"18301"}},"id":"18305","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18307","type":"Line"},{"attributes":{"axis":{"id":"18274"},"ticker":null},"id":"18277","type":"Grid"},{"attributes":{},"id":"18283","type":"PanTool"},{"attributes":{},"id":"18336","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"18323"},{"id":"18324"}],"location":"center_right","orientation":"horizontal"},"id":"18322","type":"Legend"},{"attributes":{"toolbars":[{"id":"18292"}],"tools":[{"id":"18282"},{"id":"18283"},{"id":"18284"},{"id":"18285"},{"id":"18286"},{"id":"18287"},{"id":"18288"},{"id":"18289"}]},"id":"18346","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"18290"}},"id":"18284","type":"BoxZoomTool"},{"attributes":{},"id":"18287","type":"UndoTool"},{"attributes":{},"id":"18328","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18317","type":"Circle"},{"attributes":{},"id":"18337","type":"Selection"},{"attributes":{},"id":"18339","type":"Selection"},{"attributes":{},"id":"18330","type":"AllLabels"},{"attributes":{"source":{"id":"18316"}},"id":"18320","type":"CDSView"},{"attributes":{},"id":"18266","type":"DataRange1d"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18328"},"major_label_policy":{"id":"18330"},"ticker":{"id":"18279"}},"id":"18278","type":"LinearAxis"},{"attributes":{"text":"b"},"id":"18325","type":"Title"},{"attributes":{},"id":"18270","type":"LinearScale"},{"attributes":{"source":{"id":"18311"}},"id":"18315","type":"CDSView"},{"attributes":{},"id":"18341","type":"Selection"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18312","type":"Line"},{"attributes":{"children":[[{"id":"18265"},0,0]]},"id":"18345","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18318","type":"Circle"},{"attributes":{},"id":"18288","type":"SaveTool"},{"attributes":{},"id":"18342","type":"UnionRenderers"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18331"},"major_label_policy":{"id":"18333"},"ticker":{"id":"18275"}},"id":"18274","type":"LinearAxis"},{"attributes":{},"id":"18275","type":"BasicTicker"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18319"},{"id":"18314"}]},"id":"18324","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18308","type":"Line"},{"attributes":{"above":[{"id":"18322"}],"below":[{"id":"18274"}],"center":[{"id":"18277"},{"id":"18281"}],"height":500,"left":[{"id":"18278"}],"output_backend":"webgl","renderers":[{"id":"18304"},{"id":"18309"},{"id":"18314"},{"id":"18319"},{"id":"18321"}],"title":{"id":"18325"},"toolbar":{"id":"18292"},"toolbar_location":null,"width":500,"x_range":{"id":"18266"},"x_scale":{"id":"18270"},"y_range":{"id":"18268"},"y_scale":{"id":"18272"}},"id":"18265","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"18346"},"toolbar_location":"above"},"id":"18347","type":"ToolbarBox"}],"root_ids":["18348"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"f621dac3-f5f0-498f-bbb1-8210d13d8abf","root_ids":["18348"],"roots":{"18348":"8deb7a93-b380-4d5b-943b-07b0c606f59f"}}];
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