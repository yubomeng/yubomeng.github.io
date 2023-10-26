/*
 * @Author: yubomeng 3105107535@qq.com
 * @Date: 2023-10-26 23:28:40
 * @LastEditors: yubomeng 3105107535@qq.com
 * @LastEditTime: 2023-10-26 23:28:48
 * @FilePath: \blog\themes\anzhiyu\source\js\echarts.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function switchPostChart() {
    // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
    let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4C4948' : 'rgba(255,255,255,0.7)'
    if (document.getElementById('posts-chart') && postsOption) {
        try {
            let postsOptionNew = postsOption
            postsOptionNew.title.textStyle.color = color
            postsOptionNew.xAxis.nameTextStyle.color = color
            postsOptionNew.yAxis.nameTextStyle.color = color
            postsOptionNew.xAxis.axisLabel.color = color
            postsOptionNew.yAxis.axisLabel.color = color
            postsOptionNew.xAxis.axisLine.lineStyle.color = color
            postsOptionNew.yAxis.axisLine.lineStyle.color = color
            postsOptionNew.series[0].markLine.data[0].label.color = color
            postsChart.setOption(postsOptionNew)
        } catch (error) {
            console.log(error)
        }
    }
    if (document.getElementById('tags-chart') && tagsOption) {
        try {
            let tagsOptionNew = tagsOption
            tagsOptionNew.title.textStyle.color = color
            tagsOptionNew.xAxis.nameTextStyle.color = color
            tagsOptionNew.yAxis.nameTextStyle.color = color
            tagsOptionNew.xAxis.axisLabel.color = color
            tagsOptionNew.yAxis.axisLabel.color = color
            tagsOptionNew.xAxis.axisLine.lineStyle.color = color
            tagsOptionNew.yAxis.axisLine.lineStyle.color = color
            tagsOptionNew.series[0].markLine.data[0].label.color = color
            tagsChart.setOption(tagsOptionNew)
        } catch (error) {
            console.log(error)
        }
    }
    if (document.getElementById('categories-chart') && categoriesOption) {
        try {
            let categoriesOptionNew = categoriesOption
            categoriesOptionNew.title.textStyle.color = color
            categoriesOptionNew.legend.textStyle.color = color
            if (!categoryParentFlag) { categoriesOptionNew.series[0].label.color = color }
            categoriesChart.setOption(categoriesOptionNew)
        } catch (error) {
            console.log(error)
        }
    }
}
document.getElementById("mode-button").addEventListener("click", function () { setTimeout(switchPostChart, 100) })