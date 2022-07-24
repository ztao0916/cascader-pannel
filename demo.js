var tags = [
  {
    id: 1,
    label: '中部',
    children: [
      {
        id: 2,
        label: '山西',
        children: [
          { 
            id: 3, 
            label: '太原',
            children: [
              {
                id: 31,
                label: '小店区'
              },
              {
                id: 32,
                label: '迎泽区'
              },
              {
                id: 33,
                label: '晋源区'
              }
            ]
          },
          { id: 4, label: '吕梁' }
        ]
      },
      {
        id: 5,
        label: '北京',
        children: [
          { id: 6, label: '通州区' },
          { id: 7, label: '海淀区' }
        ]
      }
    ]
  },
  {
    id: 8,
    label: '西北',
    children: [
      {
        id: 9,
        label: '陕西',
        children: [
          { id: 10, label: '西安' },
          { id: 11, label: '延安' },
          { id: 21, label: '榆林' }
        ]
      },
      {
        id: 12,
        label: '新疆维吾尔族自治区',
        children: [
          { id: 13, label: '乌鲁木齐' },
          { id: 14, label: '克拉玛依' }
        ]
      }
    ]
  }
]

// 获取选中的文本
document.getElementById('getCheckedByText').onclick = function() {
  alert('选中的文本为 \n\n' + cascader.getCheckedByText().join(',').replace(/,/g, '\n'))
}
// 获取选中的ID
document.getElementById('getCheckedByID').onclick = function() {
  alert('选中的ID为 \n\n' + cascader.getCheckedByID().join(',').replace(/,/g, '\n'))
}


var cascader = new eo_cascader(tags, {
  ele: 'cascader-wrap',
  multiple: true, // 是否多选
  // 非编辑页，checkedValue 传入 null
  // 编辑时 checkedValue 传入最后一级的 ID 即可
  // checkedValue: [4, 7, 10, 11, 21, 31, 33] || null,
  separator: '-', // 分割符 山西-太原-小店区 || 山西/太原/小店区
  clearable: true // 是否可一键删除已选
})