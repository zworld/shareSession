export default {
  install: function () {
    //日期格式化
    Date.prototype.formatter = function (format) {
      var result = format;
      //处理年
      result = result.replace(/yyyy/, this.getFullYear())
      //处理月
      result = result.replace(/MM/, this.getMonth() + 1)
      //处理日
      result = result.replace(/dd/, this.getDate())
      //处理小时
      result = result.replace(/hh/, this.getHours())
      //处理分钟
      result = result.replace(/mm/, this.getMinutes());
      //处理秒
      result = result.replace(/ss/, this.getSeconds())

    }
  }
}
