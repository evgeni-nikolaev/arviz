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
    
      
      
    
      var element = document.getElementById("c4df039c-4640-41e2-b1fb-20d2acda07b0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c4df039c-4640-41e2-b1fb-20d2acda07b0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2cf5ee8f-b60a-4cd0-b60d-076ee60b5455":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15723","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15746"},"selection_policy":{"id":"15745"}},"id":"15722","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"15688","type":"HoverTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15703","type":"Scatter"},{"attributes":{},"id":"15743","type":"UnionRenderers"},{"attributes":{},"id":"15739","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15714","type":"Circle"},{"attributes":{"data_source":{"id":"15707"},"glyph":{"id":"15708"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15709"},"view":{"id":"15711"}},"id":"15710","type":"GlyphRenderer"},{"attributes":{},"id":"15687","type":"SaveTool"},{"attributes":{},"id":"15682","type":"PanTool"},{"attributes":{},"id":"15686","type":"UndoTool"},{"attributes":{},"id":"15731","type":"AllLabels"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15744"},"selection_policy":{"id":"15743"}},"id":"15717","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15708","type":"MultiLine"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15718","type":"MultiLine"},{"attributes":{},"id":"15740","type":"Selection"},{"attributes":{"below":[{"id":"15673"}],"center":[{"id":"15676"},{"id":"15680"}],"height":500,"left":[{"id":"15677"}],"output_backend":"webgl","renderers":[{"id":"15705"},{"id":"15710"},{"id":"15715"},{"id":"15720"},{"id":"15725"},{"id":"15727"}],"title":{"id":"15729"},"toolbar":{"id":"15691"},"toolbar_location":null,"width":500,"x_range":{"id":"15665"},"x_scale":{"id":"15669"},"y_range":{"id":"15667"},"y_scale":{"id":"15671"}},"id":"15664","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"15677"},"dimension":1,"ticker":null},"id":"15680","type":"Grid"},{"attributes":{"source":{"id":"15707"}},"id":"15711","type":"CDSView"},{"attributes":{"toolbars":[{"id":"15691"}],"tools":[{"id":"15681"},{"id":"15682"},{"id":"15683"},{"id":"15684"},{"id":"15685"},{"id":"15686"},{"id":"15687"},{"id":"15688"}]},"id":"15749","type":"ProxyToolbar"},{"attributes":{"source":{"id":"15702"}},"id":"15706","type":"CDSView"},{"attributes":{},"id":"15730","type":"BasicTickFormatter"},{"attributes":{},"id":"15684","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"15689"}},"id":"15683","type":"BoxZoomTool"},{"attributes":{},"id":"15729","type":"Title"},{"attributes":{"data_source":{"id":"15712"},"glyph":{"id":"15713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15714"},"view":{"id":"15716"}},"id":"15715","type":"GlyphRenderer"},{"attributes":{},"id":"15665","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15713","type":"Circle"},{"attributes":{"source":{"id":"15717"}},"id":"15721","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15738"},"selection_policy":{"id":"15737"}},"id":"15702","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"15664"},0,0]]},"id":"15748","type":"GridBox"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15709","type":"MultiLine"},{"attributes":{"active_multi":null,"tools":[{"id":"15681"},{"id":"15682"},{"id":"15683"},{"id":"15684"},{"id":"15685"},{"id":"15686"},{"id":"15687"},{"id":"15688"}]},"id":"15691","type":"Toolbar"},{"attributes":{"toolbar":{"id":"15749"},"toolbar_location":"above"},"id":"15750","type":"ToolbarBox"},{"attributes":{"source":{"id":"15722"}},"id":"15726","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15689","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"15690"}},"id":"15685","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"15750"},{"id":"15748"}]},"id":"15751","type":"Column"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15700","type":"FixedTicker"},{"attributes":{"data_source":{"id":"15722"},"glyph":{"id":"15723"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15724"},"view":{"id":"15726"}},"id":"15725","type":"GlyphRenderer"},{"attributes":{},"id":"15738","type":"Selection"},{"attributes":{"axis":{"id":"15673"},"ticker":null},"id":"15676","type":"Grid"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15740"},"selection_policy":{"id":"15739"}},"id":"15707","type":"ColumnDataSource"},{"attributes":{},"id":"15732","type":"BasicTickFormatter"},{"attributes":{},"id":"15681","type":"ResetTool"},{"attributes":{},"id":"15745","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15690","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15724","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15704","type":"Scatter"},{"attributes":{},"id":"15669","type":"LinearScale"},{"attributes":{"formatter":{"id":"15730"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15731"},"ticker":{"id":"15700"}},"id":"15677","type":"LinearAxis"},{"attributes":{"axis_label":"Log","formatter":{"id":"15732"},"major_label_policy":{"id":"15734"},"ticker":{"id":"15674"}},"id":"15673","type":"LinearAxis"},{"attributes":{"data_source":{"id":"15717"},"glyph":{"id":"15718"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15719"},"view":{"id":"15721"}},"id":"15720","type":"GlyphRenderer"},{"attributes":{},"id":"15746","type":"Selection"},{"attributes":{},"id":"15674","type":"BasicTicker"},{"attributes":{"data_source":{"id":"15702"},"glyph":{"id":"15703"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15704"},"view":{"id":"15706"}},"id":"15705","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15712"}},"id":"15716","type":"CDSView"},{"attributes":{},"id":"15734","type":"AllLabels"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15727","type":"Span"},{"attributes":{},"id":"15744","type":"Selection"},{"attributes":{},"id":"15741","type":"UnionRenderers"},{"attributes":{},"id":"15671","type":"LinearScale"},{"attributes":{},"id":"15742","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15742"},"selection_policy":{"id":"15741"}},"id":"15712","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15719","type":"MultiLine"},{"attributes":{},"id":"15737","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"15667","type":"DataRange1d"}],"root_ids":["15751"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"2cf5ee8f-b60a-4cd0-b60d-076ee60b5455","root_ids":["15751"],"roots":{"15751":"c4df039c-4640-41e2-b1fb-20d2acda07b0"}}];
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