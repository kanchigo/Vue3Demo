const switchComponent = {
  //定义外部属性
  props: ["switchStyle", "borderColor", "backgroundColor", "color"],
  //内部属性，控制开关状态
  data() {
    return {
      isOpen: false,
      left: '0px'
    }
  },
  //通过计算属性来设置css样式
  computed: {
    cssStyleBG: {
      get() {
        if (this.switchStyle == "mini") {
          return `position: relative; border-color: ${this.borderColor}; border-width:2px; border-style:solid;
          width:55px; height:30px; border-radius:30px; background-color:${this.isOpen ? this.backgroudColor : 'white'}`
        } else {
          return `position: relative; border-color: ${this.borderColor}; border-width:2px; border-style:solid;
          width:55px; height:30px; border-radius:10px; background-color:${this.isOpen ? this.backgroudColor : 'white'}`
        }
      }
    },
    cssStyleBtn: {
      get() {
        if (this.switchStyle == "mini") {
          return `position: absolute; width:30px; height:30px; border-radius:50%; background-color:${this.color}; 
          left:${this.left}`
        } else {
          return `position: absolute; width:30px; height:30px; border-radius:8px; background-color:${this.color}; 
          left:${this.left}`
        }
      }
    }
  },
  methods: {
    click() {
      this.isOpen = !this.isOpen
      this.left = this.isOpen ? '25px' : '0px'
      this.$emit('switchChange', this.isOpen)
    }
  },
  templete: `
    <div :style = "cssStyleBG" @click = "click">
      <div :style = "cssStyleBtn"></div>
    </div>
  `
}

