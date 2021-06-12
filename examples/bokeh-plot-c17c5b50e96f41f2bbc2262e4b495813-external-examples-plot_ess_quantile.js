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
    
      
      
    
      var element = document.getElementById("aa03b6a8-e1c0-4707-ad36-586285811d3b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aa03b6a8-e1c0-4707-ad36-586285811d3b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"24d5c14b-5602-45dc-8edf-757c68a223b9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18554","type":"PanTool"},{"attributes":{},"id":"18550","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18573","type":"Circle"},{"attributes":{},"id":"18541","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18561","type":"BoxAnnotation"},{"attributes":{},"id":"18586","type":"AllLabels"},{"attributes":{},"id":"18553","type":"ResetTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"18581"},"major_label_policy":{"id":"18583"},"ticker":{"id":"18550"}},"id":"18549","type":"LinearAxis"},{"attributes":{"children":[{"id":"18594"},{"id":"18592"}]},"id":"18595","type":"Column"},{"attributes":{"overlay":{"id":"18561"}},"id":"18555","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"18563"}],"tools":[{"id":"18553"},{"id":"18554"},{"id":"18555"},{"id":"18556"},{"id":"18557"},{"id":"18558"},{"id":"18559"},{"id":"18560"}]},"id":"18593","type":"ProxyToolbar"},{"attributes":{},"id":"18558","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18584"},"major_label_policy":{"id":"18586"},"ticker":{"id":"18546"}},"id":"18545","type":"LinearAxis"},{"attributes":{},"id":"18581","type":"BasicTickFormatter"},{"attributes":{},"id":"18559","type":"SaveTool"},{"attributes":{},"id":"18589","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18562"}},"id":"18557","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"18545"}],"center":[{"id":"18548"},{"id":"18552"}],"height":500,"left":[{"id":"18549"}],"output_backend":"webgl","renderers":[{"id":"18575"},{"id":"18577"}],"title":{"id":"18578"},"toolbar":{"id":"18563"},"toolbar_location":null,"width":500,"x_range":{"id":"18537"},"x_scale":{"id":"18541"},"y_range":{"id":"18539"},"y_scale":{"id":"18543"}},"id":"18536","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18562","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18590"},"selection_policy":{"id":"18589"}},"id":"18572","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18572"},"glyph":{"id":"18573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18574"},"view":{"id":"18576"}},"id":"18575","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"18553"},{"id":"18554"},{"id":"18555"},{"id":"18556"},{"id":"18557"},{"id":"18558"},{"id":"18559"},{"id":"18560"}]},"id":"18563","type":"Toolbar"},{"attributes":{},"id":"18583","type":"AllLabels"},{"attributes":{},"id":"18546","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18560","type":"HoverTool"},{"attributes":{"toolbar":{"id":"18593"},"toolbar_location":"above"},"id":"18594","type":"ToolbarBox"},{"attributes":{},"id":"18556","type":"WheelZoomTool"},{"attributes":{"text":"sigma"},"id":"18578","type":"Title"},{"attributes":{},"id":"18539","type":"DataRange1d"},{"attributes":{"children":[[{"id":"18536"},0,0]]},"id":"18592","type":"GridBox"},{"attributes":{"axis":{"id":"18545"},"ticker":null},"id":"18548","type":"Grid"},{"attributes":{},"id":"18543","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18577","type":"Span"},{"attributes":{},"id":"18590","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18574","type":"Circle"},{"attributes":{},"id":"18537","type":"DataRange1d"},{"attributes":{"source":{"id":"18572"}},"id":"18576","type":"CDSView"},{"attributes":{},"id":"18584","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"18549"},"dimension":1,"ticker":null},"id":"18552","type":"Grid"}],"root_ids":["18595"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"24d5c14b-5602-45dc-8edf-757c68a223b9","root_ids":["18595"],"roots":{"18595":"aa03b6a8-e1c0-4707-ad36-586285811d3b"}}];
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