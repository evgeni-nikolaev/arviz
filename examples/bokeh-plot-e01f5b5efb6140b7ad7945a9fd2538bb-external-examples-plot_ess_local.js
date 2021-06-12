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
    
      
      
    
      var element = document.getElementById("82487579-074c-4e79-ba36-1842e8a97062");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '82487579-074c-4e79-ba36-1842e8a97062' but no matching script tag was found.")
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
                    
                  var docs_json = '{"832988eb-ae16-40bd-842a-64f6c900c1ca":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18462","type":"Span"},{"attributes":{},"id":"18420","type":"DataRange1d"},{"attributes":{"overlay":{"id":"18442"}},"id":"18436","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"18443"}},"id":"18438","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18454","type":"Circle"},{"attributes":{"data_source":{"id":"18459"},"glyph":{"id":"18458"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18461"}},"id":"18460","type":"GlyphRenderer"},{"attributes":{},"id":"18477","type":"UnionRenderers"},{"attributes":{},"id":"18418","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18443","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18476"},"selection_policy":{"id":"18475"}},"id":"18453","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"18481"},"toolbar_location":"above"},"id":"18482","type":"ToolbarBox"},{"attributes":{},"id":"18427","type":"BasicTicker"},{"attributes":{"text":"mu"},"id":"18464","type":"Title"},{"attributes":{},"id":"18439","type":"UndoTool"},{"attributes":{},"id":"18470","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"18417"},0,0]]},"id":"18480","type":"GridBox"},{"attributes":{"axis":{"id":"18430"},"dimension":1,"ticker":null},"id":"18433","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18442","type":"BoxAnnotation"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18458","type":"Scatter"},{"attributes":{"callback":null},"id":"18441","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18434"},{"id":"18435"},{"id":"18436"},{"id":"18437"},{"id":"18438"},{"id":"18439"},{"id":"18440"},{"id":"18441"}]},"id":"18444","type":"Toolbar"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18470"},"major_label_policy":{"id":"18472"},"ticker":{"id":"18427"}},"id":"18426","type":"LinearAxis"},{"attributes":{},"id":"18422","type":"LinearScale"},{"attributes":{},"id":"18440","type":"SaveTool"},{"attributes":{"children":[{"id":"18482"},{"id":"18480"}]},"id":"18483","type":"Column"},{"attributes":{"below":[{"id":"18426"}],"center":[{"id":"18429"},{"id":"18433"}],"height":500,"left":[{"id":"18430"}],"output_backend":"webgl","renderers":[{"id":"18456"},{"id":"18460"},{"id":"18462"},{"id":"18463"}],"title":{"id":"18464"},"toolbar":{"id":"18444"},"toolbar_location":null,"width":500,"x_range":{"id":"18418"},"x_scale":{"id":"18422"},"y_range":{"id":"18420"},"y_scale":{"id":"18424"}},"id":"18417","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"18453"},"glyph":{"id":"18454"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18455"},"view":{"id":"18457"}},"id":"18456","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18459"}},"id":"18461","type":"CDSView"},{"attributes":{},"id":"18476","type":"Selection"},{"attributes":{},"id":"18467","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18463","type":"Span"},{"attributes":{},"id":"18434","type":"ResetTool"},{"attributes":{"source":{"id":"18453"}},"id":"18457","type":"CDSView"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18467"},"major_label_policy":{"id":"18469"},"ticker":{"id":"18431"}},"id":"18430","type":"LinearAxis"},{"attributes":{},"id":"18437","type":"WheelZoomTool"},{"attributes":{},"id":"18469","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18455","type":"Circle"},{"attributes":{},"id":"18475","type":"UnionRenderers"},{"attributes":{},"id":"18435","type":"PanTool"},{"attributes":{},"id":"18431","type":"BasicTicker"},{"attributes":{},"id":"18472","type":"AllLabels"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18478"},"selection_policy":{"id":"18477"}},"id":"18459","type":"ColumnDataSource"},{"attributes":{},"id":"18424","type":"LinearScale"},{"attributes":{"axis":{"id":"18426"},"ticker":null},"id":"18429","type":"Grid"},{"attributes":{"toolbars":[{"id":"18444"}],"tools":[{"id":"18434"},{"id":"18435"},{"id":"18436"},{"id":"18437"},{"id":"18438"},{"id":"18439"},{"id":"18440"},{"id":"18441"}]},"id":"18481","type":"ProxyToolbar"},{"attributes":{},"id":"18478","type":"Selection"}],"root_ids":["18483"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"832988eb-ae16-40bd-842a-64f6c900c1ca","root_ids":["18483"],"roots":{"18483":"82487579-074c-4e79-ba36-1842e8a97062"}}];
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