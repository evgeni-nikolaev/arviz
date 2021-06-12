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
    
      
      
    
      var element = document.getElementById("b96d906f-9642-44f4-97fd-1cfd4ed9f592");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b96d906f-9642-44f4-97fd-1cfd4ed9f592' but no matching script tag was found.")
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
                    
                  var docs_json = '{"235cb331-0bdc-48b5-a22c-8932c22a78d3":{"defs":[],"roots":{"references":[{"attributes":{},"id":"43195","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43295","type":"VBar"},{"attributes":{},"id":"43330","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43344"},"selection_policy":{"id":"43343"}},"id":"43294","type":"ColumnDataSource"},{"attributes":{},"id":"43331","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"43299","type":"Span"},{"attributes":{},"id":"43347","type":"UnionRenderers"},{"attributes":{},"id":"43191","type":"DataRange1d"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43296","type":"VBar"},{"attributes":{"data_source":{"id":"43288"},"glyph":{"id":"43289"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43290"},"view":{"id":"43292"}},"id":"43291","type":"GlyphRenderer"},{"attributes":{},"id":"43335","type":"AllLabels"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43319"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43321"},"ticker":{"id":"43200"}},"id":"43199","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43249","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"43190"},0,0],[{"id":"43226"},0,1]]},"id":"43350","type":"GridBox"},{"attributes":{},"id":"43334","type":"BasicTickFormatter"},{"attributes":{},"id":"43329","type":"Selection"},{"attributes":{},"id":"43229","type":"LinearScale"},{"attributes":{},"id":"43344","type":"Selection"},{"attributes":{},"id":"43327","type":"Selection"},{"attributes":{},"id":"43318","type":"AllLabels"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43267","type":"VBar"},{"attributes":{"data_source":{"id":"43294"},"glyph":{"id":"43295"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43296"},"view":{"id":"43298"}},"id":"43297","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43273","type":"VBar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43250","type":"PolyAnnotation"},{"attributes":{},"id":"43193","type":"DataRange1d"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43329"},"selection_policy":{"id":"43328"}},"id":"43272","type":"ColumnDataSource"},{"attributes":{},"id":"43317","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43302","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"43271","type":"Span"},{"attributes":{"source":{"id":"43300"}},"id":"43304","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43348"},"selection_policy":{"id":"43347"}},"id":"43306","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"43266"},"glyph":{"id":"43267"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43268"},"view":{"id":"43270"}},"id":"43269","type":"GlyphRenderer"},{"attributes":{"source":{"id":"43288"}},"id":"43292","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43268","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43274","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43307","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43215","type":"BoxAnnotation"},{"attributes":{},"id":"43338","type":"AllLabels"},{"attributes":{"data_source":{"id":"43278"},"glyph":{"id":"43279"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43280"},"view":{"id":"43282"}},"id":"43281","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"43284","type":"FixedTicker"},{"attributes":{"below":[{"id":"43199"}],"center":[{"id":"43202"},{"id":"43206"},{"id":"43265"},{"id":"43271"},{"id":"43277"},{"id":"43283"}],"height":331,"left":[{"id":"43203"}],"output_backend":"webgl","renderers":[{"id":"43263"},{"id":"43269"},{"id":"43275"},{"id":"43281"}],"title":{"id":"43286"},"toolbar":{"id":"43217"},"toolbar_location":null,"width":496,"x_range":{"id":"43191"},"x_scale":{"id":"43195"},"y_range":{"id":"43193"},"y_scale":{"id":"43197"}},"id":"43190","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"43294"}},"id":"43298","type":"CDSView"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"43305","type":"Span"},{"attributes":{"source":{"id":"43306"}},"id":"43310","type":"CDSView"},{"attributes":{},"id":"43328","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43301","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43346"},"selection_policy":{"id":"43345"}},"id":"43300","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"43311","type":"Span"},{"attributes":{},"id":"43343","type":"UnionRenderers"},{"attributes":{"children":[{"id":"43352"},{"id":"43350"}]},"id":"43353","type":"Column"},{"attributes":{},"id":"43246","type":"UndoTool"},{"attributes":{"overlay":{"id":"43250"}},"id":"43245","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"43272"},"glyph":{"id":"43273"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43274"},"view":{"id":"43276"}},"id":"43275","type":"GlyphRenderer"},{"attributes":{},"id":"43244","type":"WheelZoomTool"},{"attributes":{},"id":"43247","type":"SaveTool"},{"attributes":{},"id":"43241","type":"ResetTool"},{"attributes":{},"id":"43346","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"43283","type":"Span"},{"attributes":{},"id":"43242","type":"PanTool"},{"attributes":{"overlay":{"id":"43249"}},"id":"43243","type":"BoxZoomTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43317"},"major_label_policy":{"id":"43318"},"ticker":{"id":"43284"}},"id":"43203","type":"LinearAxis"},{"attributes":{},"id":"43336","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"43300"},"glyph":{"id":"43301"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43302"},"view":{"id":"43304"}},"id":"43303","type":"GlyphRenderer"},{"attributes":{},"id":"43345","type":"UnionRenderers"},{"attributes":{"source":{"id":"43272"}},"id":"43276","type":"CDSView"},{"attributes":{},"id":"43197","type":"LinearScale"},{"attributes":{},"id":"43321","type":"AllLabels"},{"attributes":{"callback":null},"id":"43214","type":"HoverTool"},{"attributes":{"axis":{"id":"43237"},"dimension":1,"ticker":null},"id":"43240","type":"Grid"},{"attributes":{"below":[{"id":"43233"}],"center":[{"id":"43236"},{"id":"43240"},{"id":"43293"},{"id":"43299"},{"id":"43305"},{"id":"43311"}],"height":331,"left":[{"id":"43237"}],"output_backend":"webgl","renderers":[{"id":"43291"},{"id":"43297"},{"id":"43303"},{"id":"43309"}],"title":{"id":"43314"},"toolbar":{"id":"43251"},"toolbar_location":null,"width":496,"x_range":{"id":"43191"},"x_scale":{"id":"43229"},"y_range":{"id":"43193"},"y_scale":{"id":"43231"}},"id":"43226","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"43241"},{"id":"43242"},{"id":"43243"},{"id":"43244"},{"id":"43245"},{"id":"43246"},{"id":"43247"},{"id":"43248"}]},"id":"43251","type":"Toolbar"},{"attributes":{},"id":"43348","type":"Selection"},{"attributes":{},"id":"43234","type":"BasicTicker"},{"attributes":{},"id":"43208","type":"PanTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43336"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43338"},"ticker":{"id":"43234"}},"id":"43233","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43280","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43334"},"major_label_policy":{"id":"43335"},"ticker":{"id":"43312"}},"id":"43237","type":"LinearAxis"},{"attributes":{"callback":null},"id":"43248","type":"HoverTool"},{"attributes":{"axis":{"id":"43233"},"ticker":null},"id":"43236","type":"Grid"},{"attributes":{},"id":"43319","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"43215"}},"id":"43209","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43216","type":"PolyAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43327"},"selection_policy":{"id":"43326"}},"id":"43266","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"43203"},"dimension":1,"ticker":null},"id":"43206","type":"Grid"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"43293","type":"Span"},{"attributes":{"text":"tau"},"id":"43286","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43342"},"selection_policy":{"id":"43341"}},"id":"43288","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"43199"},"ticker":null},"id":"43202","type":"Grid"},{"attributes":{"text":"mu"},"id":"43314","type":"Title"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43279","type":"VBar"},{"attributes":{},"id":"43231","type":"LinearScale"},{"attributes":{"data_source":{"id":"43260"},"glyph":{"id":"43261"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43262"},"view":{"id":"43264"}},"id":"43263","type":"GlyphRenderer"},{"attributes":{},"id":"43326","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43289","type":"VBar"},{"attributes":{"toolbar":{"id":"43351"},"toolbar_location":"above"},"id":"43352","type":"ToolbarBox"},{"attributes":{"source":{"id":"43260"}},"id":"43264","type":"CDSView"},{"attributes":{},"id":"43325","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43262","type":"VBar"},{"attributes":{},"id":"43200","type":"BasicTicker"},{"attributes":{},"id":"43212","type":"UndoTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"43265","type":"Span"},{"attributes":{},"id":"43324","type":"UnionRenderers"},{"attributes":{},"id":"43341","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"43217"},{"id":"43251"}],"tools":[{"id":"43207"},{"id":"43208"},{"id":"43209"},{"id":"43210"},{"id":"43211"},{"id":"43212"},{"id":"43213"},{"id":"43214"},{"id":"43241"},{"id":"43242"},{"id":"43243"},{"id":"43244"},{"id":"43245"},{"id":"43246"},{"id":"43247"},{"id":"43248"}]},"id":"43351","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43261","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43325"},"selection_policy":{"id":"43324"}},"id":"43260","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"43306"},"glyph":{"id":"43307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43308"},"view":{"id":"43310"}},"id":"43309","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"43216"}},"id":"43211","type":"LassoSelectTool"},{"attributes":{"source":{"id":"43266"}},"id":"43270","type":"CDSView"},{"attributes":{"source":{"id":"43278"}},"id":"43282","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"43207"},{"id":"43208"},{"id":"43209"},{"id":"43210"},{"id":"43211"},{"id":"43212"},{"id":"43213"},{"id":"43214"}]},"id":"43217","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"43277","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43331"},"selection_policy":{"id":"43330"}},"id":"43278","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43308","type":"VBar"},{"attributes":{},"id":"43210","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43290","type":"VBar"},{"attributes":{},"id":"43213","type":"SaveTool"},{"attributes":{},"id":"43342","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"43312","type":"FixedTicker"},{"attributes":{},"id":"43207","type":"ResetTool"}],"root_ids":["43353"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"235cb331-0bdc-48b5-a22c-8932c22a78d3","root_ids":["43353"],"roots":{"43353":"b96d906f-9642-44f4-97fd-1cfd4ed9f592"}}];
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