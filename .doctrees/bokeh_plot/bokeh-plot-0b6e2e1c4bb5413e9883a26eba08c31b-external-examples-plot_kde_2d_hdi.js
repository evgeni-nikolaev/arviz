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
    
      
      
    
      var element = document.getElementById("e3685fb3-e6f9-4780-ab62-2b8a8428c038");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3685fb3-e6f9-4780-ab62-2b8a8428c038' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5a7d84bd-1c17-4fba-827b-19528923383b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21191","type":"AllLabels"},{"attributes":{"end":6.861691211489668,"start":-2.647907052511396},"id":"21182","type":"Range1d"},{"attributes":{},"id":"21145","type":"BasicTicker"},{"attributes":{"end":6.130760236692545,"start":-2.936994214040098},"id":"21183","type":"Range1d"},{"attributes":{"source":{"id":"21177"}},"id":"21181","type":"CDSView"},{"attributes":{"source":{"id":"21172"}},"id":"21176","type":"CDSView"},{"attributes":{},"id":"21148","type":"ResetTool"},{"attributes":{"source":{"id":"21167"}},"id":"21171","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[524]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[524]}},"selected":{"id":"21195"},"selection_policy":{"id":"21194"}},"id":"21167","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"21202"},"toolbar_location":"above"},"id":"21203","type":"ToolbarBox"},{"attributes":{},"id":"21188","type":"AllLabels"},{"attributes":{"formatter":{"id":"21189"},"major_label_policy":{"id":"21191"},"ticker":{"id":"21141"}},"id":"21140","type":"LinearAxis"},{"attributes":{"children":[[{"id":"21131"},0,0]]},"id":"21201","type":"GridBox"},{"attributes":{},"id":"21194","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"ZMka+JVIpz/pgl5cf9qhP3bhNw8meZo/JEcyUjVRmj/shwKpt5KfPzzfasD0UqA/UbcJ30l+nz8UdXKWOT6jPwAtZ8Svb6g/0n6MBSAmrT8eYyLEkqK1P1PMyuw5Ir0/YGuicxhjvz+7UZNme0vBPyLvoB7r0cM/2fM9b55Exz8woIiCLEfJP6y/AzW4l8s/ajSwa6FV0D9QBaBlZm7RP3JTD9FPOdM/OX4GHk8S1j+PuvuJNjnWP9b4kXIFYtg/ZXZzVKrA2j/Ib1euBgTbP25CdwwTjt0/ACWz0tbO3z8GKNr1p5XgPyBth3vTTOI//E0PpCVr4j8ej2mpeRzkP7xHtY07suQ/7m7drLAX5j9cIuOfoxfnP+5RdvJ7geg/+PwQsgt96T/BqM0rYvzqP5jXPsRz4us/eu8iE4E97T80smzW20fuP1q8V3+sc+8/aEZN9KFW8D9s/7N85/fwP7gzZP1VifE/eZWHV3WY8j8FIXsGCrzyP1YOkg++7vM//D4qYBtB9D+k+6gYciH1P790sm9gsfU/9Oi/ISZU9j/mblPudFH3P0TW1irahvc/kMPtM465+D+GayHhLlX5P+CwBD1C7Pk/MJ4bRvYe+z9nrijMPlv7P3yLMk+qUfw/W/sX0KJM/T/MeElYXoT9PxxmYGESt/4/bFN3asbp/z8Eq6vS5hcAQFwgxzk9jgBABJdSPpcnAUBRHGgnDqUBQKwN3kLxwAFAUoRpR0taAkD6+vRLpfMCQKJxgFD/jANAdCHKtKb6A0BK6AtVWSYEQPBel1mzvwRAmNUiXg1ZBUBATK5iZ/IFQObCOWfBiwZAjjnFaxslB0A2sFBwdb4HQN4m3HTPVwhAhJ1neSnxCEAsFPN9g4oJQNSKfoLdIwpAfAEKhze9CkApYke8n+QKQCJ4lYuRVgtAyu4gkOvvC0BGAgs8khQMQHJlrJRFiQxAl/n8mKAhDUAY3DeZnyINQMBSw535uw1AFraELm/8DUBoyU6iU1UOQEr47ZFxpw5AEEDapq3uDkDZdscQug4PQBrPb9ruSQ9AsaLPPTd7D0C2tmWrB4gPQOrRJWOkvw9AC7u//SDxD0AuIlTIWAcQQK+W+NewEBBA2Cj7aOkYEEDkVwcvKCQQQAJix1V3JhBAdIO1AKAiEEC7pNHMMBcQQK+W+NewEBBA9gzVsTcLEECF49n69AAQQF24JLqY6A9A9ieex8zLD0DDdVg33aYPQLa2ZasHiA9AhvrmUzp2D0A1RbNe2T4PQNMlDijR/A5AD0Dapq3uDkAtRAmBJbYOQBEyD5PObg5AaMlOolNVDkBMiGaXAy4OQHyT5ibo3g1AwFLDnfm7DUCUMPVBunkNQBjcN5mfIg1Ahkl7pOIGDUB0OaTWGJcMQHJlrJRFiQxAxnqHusgsDEDK7iCQ6+8LQJ/dIzESuQtAIniVi5FWC0D8Y5Jl+zoLQHwBCoc3vQpAuEaQXLE+CkDUin6C3SMKQBJKEF3DsQlALBTzfYOKCUDazCgreBcJQISdZ3kp8QhA48TQlodvCEDeJtx0z1cIQHKwl8J3xAdAN7BQcHW+B0COOcVrGyUHQB1+uloxFgdA5sI5Z8GLBkA8P2ywLFwGQEBMrmJn8gVAuqIxLlqGBUCY1SJeDVkFQPBel1mzvwRAfCkuf8mSBEBK6AtVWSYEQN0+xO+UoANAonGAUP+MA0D6+vRLpfMCQCudDEPKqAJAUoRpR0taAkCsDd5C8cABQJTgJqAGdwFABJdSPpcnAUBcIMc5PY4AQHfuGdihJgBAbFN3asbp/z8cZmBhErf+P7pkjaQFhf0/zHhJWF6E/T98izJPqlH8PzCeG0b2Hvs/4LAEPULs+T+Qw+0zjrn4P5+i2bGoi/c/RNbWKtqG9z/06L8hJlT2P6T7qBhyIfU/Vg6SD77u8z8GIXsGCrzyP7gzZP1VifE/aEZN9KFW8D80smzW20fuP5jXPsRz4us/+PwQsgt96T8QEDmndtzoP1wi45+jF+c/vEe1jTuy5D/f0RHRHvHiPyBth3vTTOI//ySz0tbO3z9G21M0RrbbP8hvV64GBNs/kLr7iTY51j8s7oy5fWLVP7ohr9/Cw9E/UAWgZWZu0T8XwjayZMTNPzCgiIIsR8k//Odl8OzAxj+NLg3/+xLAP2BronMYY78/D/fmgLzWtD961lbKcR2tPwAtZ8Svb6g/ZMka+JVIpz+4M2T9VYnxP/B+C0HGyvE/cdARMN188j8GIXsGCrzyP1YOkg++7vM/MhBCiH8K9D+k+6gYciH1P/TovyEmVPY/RNbWKtqG9z+Qw+0zjrn4P+CwBD1C7Pk/L54bRvYe+z98izJPqlH8P8x4SVhehP0/HGZgYRK3/j8EHNKPTqr/P2xTd2rG6f8/XCDHOT2OAEAEl1I+lycBQFP3eJP1RAFArA3eQvHAAUCY1nEWJFUCQFKEaUdLWgJA+vr0S6XzAkCQdGlxlRkDQKJxgFD/jANA3mvDNXrDA0BK6AtVWSYEQKjAyjQpWwRA8F6XWbO/BEBatkEQEPEEQJjVIl4NWQVAVjXyJd2XBUBATK5iZ/IFQIanA9GyLAZA5sI5Z8GLBkBv/EHtqZwGQL4+RExP9gZAjjnFaxslB0DqcgpgJkYHQF2OWZtIhwdANrBQcHW+B0B0kfLfN/EHQMyTRRYDHwhAgeVpdTc/CEDFLV85T0wIQKKdd/0OSghA8BY12iQtCECtKDtCgfQHQDWwUHB1vgdAG+byPPC3B0BcwB6nKF4HQI45xWsbJQdAGoU1TIKkBkDmwjlnwYsGQEBMrmJn8gVAmNUiXg1ZBUDk92sDdhAFQPBel1mzvwRASugLVVkmBECicYBQ/4wDQPr69Eul8wJA5hqxcpK2AkBShGlHS1oCQKwN3kLxwAFABJdSPpcnAUBcIMc5PY4AQEYFuHHzYQBAbFN3asbp/z8cZmBhErf+P6Bgr5KlYf4/zHhJWF6E/T8PqtUnylj8P3yLMk+qUfw/MJ4bRvYe+z9wTMOEM736P+CwBD1C7Pk/tE3Kjv9B+T+Qw+0zjrn4P+nd4eENzfc/RNbWKtqG9z8WFxmZc3n2P/TovyEmVPY/TqIadmN89T+k+6gYciH1P4saVhE5sPQ/Vg6SD77u8z8V1BesnOzzP4z1bQ4NKfM/BiF7Bgq88j+4wDE9LX7yP+AAWBb98PE/uDNk/VWJ8T9OIE7qkHrxP+DN0e9ZEfE/gOq73fvB8D/DOh90WpHwPyXnG6W1hvA/mnlw0w+t8D9SN10M5fTwP8bOjFvtUPE/uDNk/VWJ8T8=","dtype":"float64","order":"little","shape":[310]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[310]}},"selected":{"id":"21197"},"selection_policy":{"id":"21196"}},"id":"21172","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"21144"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21147","type":"Grid"},{"attributes":{"formatter":{"id":"21186"},"major_label_policy":{"id":"21188"},"ticker":{"id":"21145"}},"id":"21144","type":"LinearAxis"},{"attributes":{"children":[{"id":"21203"},{"id":"21201"}]},"id":"21204","type":"Column"},{"attributes":{"toolbars":[{"id":"21158"}],"tools":[{"id":"21148"},{"id":"21149"},{"id":"21150"},{"id":"21151"},{"id":"21152"},{"id":"21153"},{"id":"21154"},{"id":"21155"}]},"id":"21202","type":"ProxyToolbar"},{"attributes":{},"id":"21149","type":"PanTool"},{"attributes":{},"id":"21151","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"21155","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"xs6MW+1Q8T9SN10M5fTwP5p5cNMPrfA/JecbpbWG8D/EOh90WpHwP4Dqu937wfA/4M3R71kR8T9OIE7qkHrxP7gzZP1VifE/4ABYFv3w8T+4wDE9LX7yPwYhewYKvPI/jPVtDg0p8z8V1BesnOzzP1YOkg++7vM/ixpWETmw9D+k+6gYciH1P06iGnZjfPU/9Oi/ISZU9j8XFxmZc3n2P0TW1irahvc/6d3h4Q3N9z+Qw+0zjrn4P7RNyo7/Qfk/4LAEPULs+T9wTMOEM736Py+eG0b2Hvs/fIsyT6pR/D8PqtUnylj8P8x4SVhehP0/oGCvkqVh/j8cZmBhErf+P2xTd2rG6f8/RgW4cfNhAEBcIMc5PY4AQASXUj6XJwFArA3eQvHAAUBShGlHS1oCQOYasXKStgJA+vr0S6XzAkCicYBQ/4wDQEroC1VZJgRA8F6XWbO/BEDk92sDdhAFQJjVIl4NWQVAQEyuYmfyBUDmwjlnwYsGQBmFNUyCpAZAjjnFaxslB0BcwB6nKF4HQBvm8jzwtwdANrBQcHW+B0CtKDtCgfQHQO8WNdokLQhAop13/Q5KCEDFLV85T0wIQIHlaXU3PwhAzJNFFgMfCEB0kfLfN/EHQDawUHB1vgdAXY5Zm0iHB0DqcgpgJkYHQI45xWsbJQdAvj5ETE/2BkBv/EHtqZwGQObCOWfBiwZAhqcD0bIsBkBATK5iZ/IFQFY18iXdlwVAmNUiXg1ZBUBbtkEQEPEEQPBel1mzvwRAp8DKNClbBEBK6AtVWSYEQN5rwzV6wwNAonGAUP+MA0CQdGlxlRkDQPr69Eul8wJAUoRpR0taAkCY1nEWJFUCQKwN3kLxwAFAU/d4k/VEAUAEl1I+lycBQFwgxzk9jgBAbFN3asbp/z8EHNKPTqr/PxxmYGESt/4/zHhJWF6E/T98izJPqlH8PzCeG0b2Hvs/4LAEPULs+T+Qw+0zjrn4P0TW1irahvc/9Oi/ISZU9j+k+6gYciH1PzIQQoh/CvQ/Vg6SD77u8z8GIXsGCrzyP3HQETDdfPI/8H4LQcbK8T+4M2T9VYnxP8bOjFvtUPE/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"LCQeU7Ox9j+UdmZGJ9b3P/zIrjmb+vg/ZBv3LA8f+j/MbT8gg0P7PzTAhxP3Z/w/nBLQBmuM/T8IZRj63rD+P1zueQaB1P4/cLdg7VLV/z/shFRw43wAQOyaQfiHsgBAIK74aR0PAUBU15xjV6EBQGFjgKXdogFAiABBXZEzAkAnqtwe2IQCQLwp5VbLxQJAwGyxgwFFA0DyUolQBVgDQGB7lhuPzgNAJnwtSj/qA0DTIa/bqUcEQFql0UN5fARAGkH83qO9BECOznU9sw4FQP54qr5ZMgVA0hjhhL+eBUDC9xk37aAFQL/E98jW+QVA9iC+MCczBkBSzydCg0kGQEYds2MblgZAKkpiKmHFBkDodfh6BNkGQMKB5L98CwdA+G6harQtB0CaIMIDo0gHQGBzBiSbVwdA+OGFz+1hB0Cvf1gJgm0HQK6Q03xGbQdA4fm3Y/9lB0BgcwYkm1cHQLDdMKCwSQdAlFpPaqASB0DI0UeL1tEGQCpKYiphxQZAWKOCORlrBkD2IL4wJzMGQML3GTftoAVArBGCzP2RBUCOznU9sw4FQFql0UN5fARAJnwtSj/qA0DyUolQBVgDQLwp5VbLxQJAiABBXZEzAkBU15xjV6EBQCCu+GkdDwFA7IRUcON8AEBwt2DtUtX/P44xpUWSVv8/CGUY+t6w/j+cEtAGa4z9P5R4VPV2Wv0/NMCHE/dn/D+0ntSmHe37P8xtPyCDQ/s/7iyuqM/Y+j9kG/csDx/6P6APjSo3w/k//MiuOZv6+D+Qj6TyG5T4P5R2ZkYn1vc/0XztMEl39z8sJB5Ts7H2P7TkpSuEdPY/8Owb9luT9T/A0dVfP431Pz7BkR3u5fQ/WH+NbMto9D9Bzis4zEz0P94A6gw/yfM/j1GO2cVW8z/wLEV5V0TzP8L7sDot/fI/cHRakk2x8j8VbmlEU3LyP/4HcgFiSvI/lG2yfUo+8j90ycn6UEjyP0rjaHc/Y/I/kQ43AeiL8j+odLyh09LyP/AsRXlXRPM/F2j1j1VT8z9rDhmaSif0P1h/jWzLaPQ/wNHVXz+N9T+q6adLwR32PywkHlOzsfY/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"21199"},"selection_policy":{"id":"21198"}},"id":"21177","type":"ColumnDataSource"},{"attributes":{},"id":"21153","type":"UndoTool"},{"attributes":{},"id":"21199","type":"Selection"},{"attributes":{},"id":"21154","type":"SaveTool"},{"attributes":{"axis":{"id":"21140"},"grid_line_color":null,"ticker":null},"id":"21143","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"21148"},{"id":"21149"},{"id":"21150"},{"id":"21151"},{"id":"21152"},{"id":"21153"},{"id":"21154"},{"id":"21155"}]},"id":"21158","type":"Toolbar"},{"attributes":{},"id":"21196","type":"UnionRenderers"},{"attributes":{},"id":"21185","type":"Title"},{"attributes":{"data_source":{"id":"21167"},"glyph":{"id":"21168"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21169"},"view":{"id":"21171"}},"id":"21170","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"21156"}},"id":"21150","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21174","type":"Patch"},{"attributes":{"data_source":{"id":"21177"},"glyph":{"id":"21178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21179"},"view":{"id":"21181"}},"id":"21180","type":"GlyphRenderer"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21178","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21156","type":"BoxAnnotation"},{"attributes":{},"id":"21195","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21157","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"21140"}],"center":[{"id":"21143"},{"id":"21147"}],"height":500,"left":[{"id":"21144"}],"output_backend":"webgl","renderers":[{"id":"21170"},{"id":"21175"},{"id":"21180"}],"title":{"id":"21185"},"toolbar":{"id":"21158"},"toolbar_location":null,"width":500,"x_range":{"id":"21182"},"x_scale":{"id":"21136"},"y_range":{"id":"21183"},"y_scale":{"id":"21138"}},"id":"21131","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21179","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21169","type":"Patch"},{"attributes":{},"id":"21186","type":"BasicTickFormatter"},{"attributes":{},"id":"21189","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"21172"},"glyph":{"id":"21173"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21174"},"view":{"id":"21176"}},"id":"21175","type":"GlyphRenderer"},{"attributes":{},"id":"21138","type":"LinearScale"},{"attributes":{"overlay":{"id":"21157"}},"id":"21152","type":"LassoSelectTool"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21173","type":"Patch"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21168","type":"Patch"},{"attributes":{},"id":"21197","type":"Selection"},{"attributes":{},"id":"21136","type":"LinearScale"},{"attributes":{},"id":"21141","type":"BasicTicker"},{"attributes":{},"id":"21198","type":"UnionRenderers"}],"root_ids":["21204"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"5a7d84bd-1c17-4fba-827b-19528923383b","root_ids":["21204"],"roots":{"21204":"e3685fb3-e6f9-4780-ab62-2b8a8428c038"}}];
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