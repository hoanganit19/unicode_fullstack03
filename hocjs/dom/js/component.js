//Định nghĩa component

var Unicode = {
  template: null,
  component: function (name, options = {}) {
    var _this = this;
    var BaseComponent = function () {
      return Reflect.construct(HTMLElement, [], BaseComponent);
    };

    BaseComponent.prototype = Object.create(HTMLElement.prototype);

    BaseComponent.prototype.connectedCallback = function () {
      _this.handleCallback(options, this);
    };

    customElements.define(name, BaseComponent);
  },

  handleCallback: function (options, component) {
    var _this = this;
    var shadow = component.attachShadow({ mode: "open" });
    var template = options.template;

    var data = options.data();
    _this.state = {};

    if (Object.keys(data).length) {
      Object.keys(data).forEach(function (state) {
        _this.state[state] = data[state];
        window[state] = data[state];
      });
    }

    var templateEl = document.createElement("template");
    templateEl.innerHTML = template;
    var templateNode = templateEl.content.cloneNode(true);

    Array.from(templateNode.children).forEach(function (element) {
      Array.from(element.attributes).forEach(function (attribute) {
        //Kiểm tra xem attribute có bắt đầu bằng @ hay không?
        if (attribute.name.indexOf("@") === 0) {
          //Event
          var eventName = attribute.name.replace("@", "").trim();
          var eventValue = attribute.value;
          element.addEventListener(eventName, function () {
            var handler = new Function(eventValue);
            handler();
            _this.updateState(_this.state);
            _this.render(_this.state, shadow); //Re-render
          });
        }

        if (attribute.name.indexOf("v-if") === 0) {
          var condition = attribute.value;
          var handler = new Function(`return ${condition}`);
          if (!handler()) {
            element.remove();
          }
        }
      });
    });

    shadow.append(templateNode);
    _this.template = shadow.innerHTML;
    _this.render(_this.state, shadow); //Render UI
  },

  updateState: function (state) {
    Object.keys(state).forEach(function (key) {
      state[key] = window[key];
    });
    this.state = state;
  },

  render: function (state, component) {
    console.log(state);
    // console.log("Re-render");
    // var _this = this;
    // //Tạo ra từng Node từ _this.template
    // // var templateEl = document.createElement("template");
    // // templateEl.innerHTML = _this.template;
    // // var templateNode = templateEl.content.cloneNode(true);
    // Object.keys(state).forEach(function (key) {
    //   Array.from(component.children).forEach(function (element, index) {
    //     // var newNode = node;
    //     var textNodeArr = element.textContent.split(`{{${key}}}`);
    //     if (textNodeArr.length) {
    //       textNodeArr.forEach(function (textItem) {
    //         var textNode = document.createTextNode(
    //           textItem.replaceAll(`{{${key}}}`, state[key]),
    //         );
    //         console.log(textNode);
    //         element.append(textNode);
    //       });
    //     }
    //     // newNode.textContent = newNode.textContent.replaceAll(
    //     //   `{{${key}}}`,
    //     //   state[key],
    //     // );
    //     // component.replaceChild(newNode, node);
    //   });
    // });
    // var html = component.innerHTML;
    // component.innerHTML = html;
  },
};

//Hướng dẫn sử dụng Regex
