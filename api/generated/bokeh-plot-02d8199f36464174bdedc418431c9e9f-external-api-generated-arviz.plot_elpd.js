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
    
      
      
    
      var element = document.getElementById("4267de76-b8a8-4d39-8d9b-770e7091909d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4267de76-b8a8-4d39-8d9b-770e7091909d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2c70c621-f2f8-42e3-8d08-4b2b000e9026":{"defs":[],"roots":{"references":[{"attributes":{},"id":"14886","type":"LinearScale"},{"attributes":{},"id":"14893","type":"BasicTicker"},{"attributes":{"callback":null},"id":"14903","type":"HoverTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14905","type":"PolyAnnotation"},{"attributes":{},"id":"14922","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"14934"},"toolbar_location":"above"},"id":"14935","type":"ToolbarBox"},{"attributes":{},"id":"14889","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14922"},"major_label_policy":{"id":"14924"},"ticker":{"id":"14893"}},"id":"14892","type":"LinearAxis"},{"attributes":{"text":"centered model - non centered model"},"id":"14919","type":"Title"},{"attributes":{},"id":"14902","type":"SaveTool"},{"attributes":{},"id":"14925","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14904"}},"id":"14898","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14904","type":"BoxAnnotation"},{"attributes":{},"id":"14901","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"14896"},{"id":"14897"},{"id":"14898"},{"id":"14899"},{"id":"14900"},{"id":"14901"},{"id":"14902"},{"id":"14903"}]},"id":"14906","type":"Toolbar"},{"attributes":{"axis":{"id":"14888"},"ticker":null},"id":"14891","type":"Grid"},{"attributes":{"toolbars":[{"id":"14906"}],"tools":[{"id":"14896"},{"id":"14897"},{"id":"14898"},{"id":"14899"},{"id":"14900"},{"id":"14901"},{"id":"14902"},{"id":"14903"}]},"id":"14934","type":"ProxyToolbar"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14915","type":"Scatter"},{"attributes":{"children":[[{"id":"14879"},0,0]]},"id":"14933","type":"GridBox"},{"attributes":{},"id":"14897","type":"PanTool"},{"attributes":{},"id":"14924","type":"AllLabels"},{"attributes":{},"id":"14931","type":"Selection"},{"attributes":{},"id":"14930","type":"UnionRenderers"},{"attributes":{},"id":"14880","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14905"}},"id":"14900","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"14916"},"glyph":{"id":"14915"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14918"}},"id":"14917","type":"GlyphRenderer"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14931"},"selection_policy":{"id":"14930"}},"id":"14916","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"14892"},"dimension":1,"ticker":null},"id":"14895","type":"Grid"},{"attributes":{},"id":"14882","type":"DataRange1d"},{"attributes":{},"id":"14899","type":"WheelZoomTool"},{"attributes":{},"id":"14884","type":"LinearScale"},{"attributes":{},"id":"14896","type":"ResetTool"},{"attributes":{},"id":"14927","type":"AllLabels"},{"attributes":{"source":{"id":"14916"}},"id":"14918","type":"CDSView"},{"attributes":{"children":[{"id":"14935"},{"id":"14933"}]},"id":"14936","type":"Column"},{"attributes":{"below":[{"id":"14888"}],"center":[{"id":"14891"},{"id":"14895"}],"height":288,"left":[{"id":"14892"}],"output_backend":"webgl","renderers":[{"id":"14917"}],"title":{"id":"14919"},"toolbar":{"id":"14906"},"toolbar_location":null,"width":432,"x_range":{"id":"14880"},"x_scale":{"id":"14884"},"y_range":{"id":"14882"},"y_scale":{"id":"14886"}},"id":"14879","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"14925"},"major_label_policy":{"id":"14927"},"ticker":{"id":"14889"}},"id":"14888","type":"LinearAxis"}],"root_ids":["14936"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"2c70c621-f2f8-42e3-8d08-4b2b000e9026","root_ids":["14936"],"roots":{"14936":"4267de76-b8a8-4d39-8d9b-770e7091909d"}}];
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