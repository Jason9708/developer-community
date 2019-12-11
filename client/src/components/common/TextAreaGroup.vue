<template>
  <div>
    <textarea 
      class="Text"
      :placeholder="placeholder"
      :value="value"
      :name='name'
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "textAreaGroup",
  props: {
    type: {
        type: String,
        default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    error: String,
    info: String
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.Text{
    border:1px solid #fff;
    width:350px;
    height:40px;
    line-height:20px;
    margin-bottom:10px;
    border-radius: 3px;
    /* border:1px solid rgb(23, 99, 63); */
    text-indent:10px;
    font-size:12px;
    background:transparent;
    color:#fff;  
    font-weight:bold;
}
/*设置placeholder字体*/
::-webkit-input-placeholder { /* WebKit browsers */
  color: #fff;
  font-size: 12px;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #fff;
  font-size: 12px;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #fff;
  font-size: 12px;
}  
</style>