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
    
      
      
    
      var element = document.getElementById("527eade3-12b8-4205-8bf4-e844e58d9f42");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '527eade3-12b8-4205-8bf4-e844e58d9f42' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1e18e7e0-a244-48d3-893e-5b2cc5e2598e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17985","type":"BasicTicker"},{"attributes":{},"id":"17972","type":"DataRange1d"},{"attributes":{},"id":"18019","type":"AllLabels"},{"attributes":{},"id":"18023","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"17988"},{"id":"17989"},{"id":"17990"},{"id":"17991"},{"id":"17992"},{"id":"17993"},{"id":"17994"},{"id":"17995"}]},"id":"17998","type":"Toolbar"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"18014"},"major_label_policy":{"id":"18016"},"ticker":{"id":"17985"}},"id":"17984","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17995","type":"HoverTool"},{"attributes":{"overlay":{"id":"17996"}},"id":"17990","type":"BoxZoomTool"},{"attributes":{},"id":"18017","type":"BasicTickFormatter"},{"attributes":{},"id":"17988","type":"ResetTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"18007","type":"Scatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17997","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"18026"},"toolbar_location":"above"},"id":"18027","type":"ToolbarBox"},{"attributes":{"source":{"id":"18008"}},"id":"18010","type":"CDSView"},{"attributes":{},"id":"17976","type":"LinearScale"},{"attributes":{"children":[[{"id":"17971"},0,0]]},"id":"18025","type":"GridBox"},{"attributes":{"below":[{"id":"17980"}],"center":[{"id":"17983"},{"id":"17987"}],"height":288,"left":[{"id":"17984"}],"output_backend":"webgl","renderers":[{"id":"18009"}],"title":{"id":"18011"},"toolbar":{"id":"17998"},"toolbar_location":null,"width":432,"x_range":{"id":"17972"},"x_scale":{"id":"17976"},"y_range":{"id":"17974"},"y_scale":{"id":"17978"}},"id":"17971","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18016","type":"AllLabels"},{"attributes":{},"id":"17991","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"18027"},{"id":"18025"}]},"id":"18028","type":"Column"},{"attributes":{},"id":"17974","type":"DataRange1d"},{"attributes":{"axis":{"id":"17980"},"ticker":null},"id":"17983","type":"Grid"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"18023"},"selection_policy":{"id":"18022"}},"id":"18008","type":"ColumnDataSource"},{"attributes":{},"id":"17978","type":"LinearScale"},{"attributes":{"data_source":{"id":"18008"},"glyph":{"id":"18007"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18010"}},"id":"18009","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17997"}},"id":"17992","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"17984"},"dimension":1,"ticker":null},"id":"17987","type":"Grid"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"18011","type":"Title"},{"attributes":{},"id":"17994","type":"SaveTool"},{"attributes":{},"id":"17981","type":"BasicTicker"},{"attributes":{},"id":"17993","type":"UndoTool"},{"attributes":{},"id":"18022","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"17998"}],"tools":[{"id":"17988"},{"id":"17989"},{"id":"17990"},{"id":"17991"},{"id":"17992"},{"id":"17993"},{"id":"17994"},{"id":"17995"}]},"id":"18026","type":"ProxyToolbar"},{"attributes":{},"id":"18014","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17996","type":"BoxAnnotation"},{"attributes":{},"id":"17989","type":"PanTool"},{"attributes":{"formatter":{"id":"18017"},"major_label_policy":{"id":"18019"},"ticker":{"id":"17981"}},"id":"17980","type":"LinearAxis"}],"root_ids":["18028"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"1e18e7e0-a244-48d3-893e-5b2cc5e2598e","root_ids":["18028"],"roots":{"18028":"527eade3-12b8-4205-8bf4-e844e58d9f42"}}];
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