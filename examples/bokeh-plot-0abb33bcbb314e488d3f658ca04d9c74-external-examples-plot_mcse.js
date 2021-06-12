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
    
      
      
    
      var element = document.getElementById("02254433-0fb8-4108-8c0d-6b32d37860d9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '02254433-0fb8-4108-8c0d-6b32d37860d9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c7795e4b-074e-449e-b055-d1eefcf36443":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"37107"}],"center":[{"id":"37110"},{"id":"37114"}],"height":500,"left":[{"id":"37111"}],"output_backend":"webgl","renderers":[{"id":"37173"},{"id":"37175"},{"id":"37176"},{"id":"37177"},{"id":"37180"}],"title":{"id":"37182"},"toolbar":{"id":"37125"},"toolbar_location":null,"width":500,"x_range":{"id":"37099"},"x_scale":{"id":"37103"},"y_range":{"id":"37101"},"y_scale":{"id":"37105"}},"id":"37098","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"37184"}},"id":"37188","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"37115"},{"id":"37116"},{"id":"37117"},{"id":"37118"},{"id":"37119"},{"id":"37120"},{"id":"37121"},{"id":"37122"}]},"id":"37125","type":"Toolbar"},{"attributes":{"data_source":{"id":"37193"},"glyph":{"id":"37192"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37195"}},"id":"37194","type":"GlyphRenderer"},{"attributes":{},"id":"37224","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37159","type":"BoxAnnotation"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37224"},"selection_policy":{"id":"37223"}},"id":"37193","type":"ColumnDataSource"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37192","type":"Scatter"},{"attributes":{"data_source":{"id":"37184"},"glyph":{"id":"37185"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37186"},"view":{"id":"37188"}},"id":"37187","type":"GlyphRenderer"},{"attributes":{"source":{"id":"37193"}},"id":"37195","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"37190","type":"Span"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37191","type":"Span"},{"attributes":{},"id":"37202","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37123","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"37179"},"glyph":{"id":"37178"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37181"}},"id":"37180","type":"GlyphRenderer"},{"attributes":{},"id":"37204","type":"AllLabels"},{"attributes":{},"id":"37213","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37160","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37171","type":"Circle"},{"attributes":{},"id":"37215","type":"AllLabels"},{"attributes":{"end":1,"start":-0.05},"id":"37101","type":"DataRange1d"},{"attributes":{},"id":"37207","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37124","type":"PolyAnnotation"},{"attributes":{},"id":"37112","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37202"},"major_label_policy":{"id":"37204"},"ticker":{"id":"37108"}},"id":"37107","type":"LinearAxis"},{"attributes":{},"id":"37208","type":"Selection"},{"attributes":{"toolbar":{"id":"37227"},"toolbar_location":"above"},"id":"37228","type":"ToolbarBox"},{"attributes":{},"id":"37103","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"37125"},{"id":"37161"}],"tools":[{"id":"37115"},{"id":"37116"},{"id":"37117"},{"id":"37118"},{"id":"37119"},{"id":"37120"},{"id":"37121"},{"id":"37122"},{"id":"37151"},{"id":"37152"},{"id":"37153"},{"id":"37154"},{"id":"37155"},{"id":"37156"},{"id":"37157"},{"id":"37158"}]},"id":"37227","type":"ProxyToolbar"},{"attributes":{"text":"mu"},"id":"37196","type":"Title"},{"attributes":{},"id":"37209","type":"UnionRenderers"},{"attributes":{"source":{"id":"37170"}},"id":"37174","type":"CDSView"},{"attributes":{"below":[{"id":"37143"}],"center":[{"id":"37146"},{"id":"37150"}],"height":500,"left":[{"id":"37147"}],"output_backend":"webgl","renderers":[{"id":"37187"},{"id":"37189"},{"id":"37190"},{"id":"37191"},{"id":"37194"}],"title":{"id":"37196"},"toolbar":{"id":"37161"},"toolbar_location":null,"width":500,"x_range":{"id":"37135"},"x_scale":{"id":"37139"},"y_range":{"id":"37137"},"y_scale":{"id":"37141"}},"id":"37134","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"37098"},0,0],[{"id":"37134"},0,1]]},"id":"37226","type":"GridBox"},{"attributes":{"children":[{"id":"37228"},{"id":"37226"}]},"id":"37229","type":"Column"},{"attributes":{},"id":"37105","type":"LinearScale"},{"attributes":{},"id":"37210","type":"Selection"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37199"},"major_label_policy":{"id":"37201"},"ticker":{"id":"37112"}},"id":"37111","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37172","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37216"},"major_label_policy":{"id":"37218"},"ticker":{"id":"37144"}},"id":"37143","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"37137","type":"DataRange1d"},{"attributes":{},"id":"37216","type":"BasicTickFormatter"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37213"},"major_label_policy":{"id":"37215"},"ticker":{"id":"37148"}},"id":"37147","type":"LinearAxis"},{"attributes":{},"id":"37139","type":"LinearScale"},{"attributes":{},"id":"37141","type":"LinearScale"},{"attributes":{},"id":"37108","type":"BasicTicker"},{"attributes":{"callback":null},"id":"37158","type":"HoverTool"},{"attributes":{},"id":"37218","type":"AllLabels"},{"attributes":{},"id":"37144","type":"BasicTicker"},{"attributes":{"axis":{"id":"37143"},"ticker":null},"id":"37146","type":"Grid"},{"attributes":{"axis":{"id":"37147"},"dimension":1,"ticker":null},"id":"37150","type":"Grid"},{"attributes":{},"id":"37199","type":"BasicTickFormatter"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37178","type":"Scatter"},{"attributes":{},"id":"37148","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37185","type":"Circle"},{"attributes":{"overlay":{"id":"37124"}},"id":"37119","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"37170"},"glyph":{"id":"37171"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37172"},"view":{"id":"37174"}},"id":"37173","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"37159"}},"id":"37153","type":"BoxZoomTool"},{"attributes":{},"id":"37201","type":"AllLabels"},{"attributes":{},"id":"37221","type":"UnionRenderers"},{"attributes":{},"id":"37152","type":"PanTool"},{"attributes":{},"id":"37151","type":"ResetTool"},{"attributes":{},"id":"37157","type":"SaveTool"},{"attributes":{},"id":"37154","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"37160"}},"id":"37155","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"37107"},"ticker":null},"id":"37110","type":"Grid"},{"attributes":{"callback":null},"id":"37122","type":"HoverTool"},{"attributes":{},"id":"37156","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"37151"},{"id":"37152"},{"id":"37153"},{"id":"37154"},{"id":"37155"},{"id":"37156"},{"id":"37157"},{"id":"37158"}]},"id":"37161","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"37175","type":"Span"},{"attributes":{},"id":"37222","type":"Selection"},{"attributes":{},"id":"37120","type":"UndoTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"37189","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"37176","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37186","type":"Circle"},{"attributes":{"axis":{"id":"37111"},"dimension":1,"ticker":null},"id":"37114","type":"Grid"},{"attributes":{},"id":"37135","type":"DataRange1d"},{"attributes":{"source":{"id":"37179"}},"id":"37181","type":"CDSView"},{"attributes":{"overlay":{"id":"37123"}},"id":"37117","type":"BoxZoomTool"},{"attributes":{"text":"tau"},"id":"37182","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37208"},"selection_policy":{"id":"37207"}},"id":"37170","type":"ColumnDataSource"},{"attributes":{},"id":"37116","type":"PanTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37177","type":"Span"},{"attributes":{},"id":"37115","type":"ResetTool"},{"attributes":{},"id":"37121","type":"SaveTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37210"},"selection_policy":{"id":"37209"}},"id":"37179","type":"ColumnDataSource"},{"attributes":{},"id":"37223","type":"UnionRenderers"},{"attributes":{},"id":"37118","type":"WheelZoomTool"},{"attributes":{},"id":"37099","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37222"},"selection_policy":{"id":"37221"}},"id":"37184","type":"ColumnDataSource"}],"root_ids":["37229"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"c7795e4b-074e-449e-b055-d1eefcf36443","root_ids":["37229"],"roots":{"37229":"02254433-0fb8-4108-8c0d-6b32d37860d9"}}];
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