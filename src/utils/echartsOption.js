let leftFiveDutyOption = {
	color: ['#00d3e1', '#2faddc', '#d04e58', '#ea702e', '#f1e329'],   //环形颜色
	// color:['#00d3e1','#2faddc','#0084bc','#3d4596','#d04e58','#d3666b','#ea702e','#f3a253','#f1e329','#00f993'],   //环形颜色
	title: {
		zlevel: 0,
		text: [
			'{name|职能人数}',
			'{value|' + 0 + '}',
		].join('\n'),
		rich: {
			value: {
				color: '#02d6d6',
				fontSize: 50,
				fontWeight: 'bold',
				lineHeight: 50,
			},
			name: {
				color: '#02d6d6',
				lineHeight: 50
			},
		},
		top: 'center',
		left: '480',
		textAlign: 'center',
		textStyle: {
			rich: {
				value: {
					color: '#02d6d6',
					fontSize: 50,
					fontWeight: 'bold',
					lineHeight: 50,
				},
				name: {
					color: '#02d6d6',
					lineHeight: 50
				},
			},
		},
	},
	series: [
		{
			data: [],
			type: 'pie',                    // 系列类型 
			center: ['51%', '50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
			radius: ['52%', '70%'],        // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
			hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
			avoidLabelOverlap: true,
			itemStyle: {},
			label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
				normal: {
					show: true,             // 是否显示标签[ default: false ]
					position: 'outside',
					formatter: '{c} \n {b}',
					//     return data.name +"\n"+ data.value+"\n"+"人"
					//   },
					rich: {
						b: {
							fontSize: 14,
							align: 'left',
							fontWeight: 'bold'
						},
						c: {
							fontSize: 16,
							align: 'right',
							fontWeight: 'bold'
						},

					},
				},
				emphasis: {
					show: true,
					position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
					shadowColor: 'rgba(30,144,255,0.5)',
					formatter: '{c} \n {b}',  // 标签内容
					textStyle: {
						fontSize: '12',
						fontWeight: 'bolder'
					},
					length: 1
				}
			},
			labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
				normal: {
					show: true,             // 是否显示视觉引导线。
					length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
					length2: 10,            // 视觉引导项第二段的长度。
					lineStyle: {            // 视觉引导线的样式
						// color: '#000',
						// width: 1
					}
				}
			},
		},
	]
};
let leftFourStateOption = {
	color: ['#00c5c7', '#00face', '#00caff', '#00eeff', '#0084bc'],   //环形颜色
	title: {
		zlevel: 0,
		text: [
			'{name|在线人数}',
			'{value|' + 0 + '}',
		].join('\n'),
		rich: {
			value: {
				color: '#02d6d6',
				fontSize: 50,
				fontWeight: 'bold',
				lineHeight: 50,
			},
			name: {
				color: '#02d6d6',
				lineHeight: 50
			},
		},
		top: 'center',
		left: '480',
		textAlign: 'center',
		textStyle: {
			rich: {
				value: {
					color: '#02d6d6',
					fontSize: 50,
					fontWeight: 'bold',
					lineHeight: 50,
				},
				name: {
					color: '#02d6d6',
					lineHeight: 50
				},
			},
		},
	},
	series: [
		{
			data: [],
			type: 'pie',                    // 系列类型 
			center: ['50%', '50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
			radius: ['52%', '70%'],        // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
			hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
			avoidLabelOverlap: true,
			itemStyle: {},
			label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
				normal: {
					show: true,             // 是否显示标签[ default: false ]
					// position: 'center',
					formatter: '{b} \n {c}',
					rich: {
						b: {
							fontSize: 12,
							align: 'left',
						},
						c: {
							fontSize: 16,
							align: 'left',
							fontWeight: 'bolder'
						},

					},
				},
				emphasis: {
					show: true,
					position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
					shadowColor: 'rgba(30,144,255,0.5)',
					formatter: '{b} \n {c}',  // 标签内容
					textStyle: {
						fontSize: '12',
						fontWeight: 'bold'
					},
					length: 1
				}
			},
			labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
				normal: {
					show: true,             // 是否显示视觉引导线。
					length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
					length2: 10,            // 视觉引导项第二段的长度。
					lineStyle: {            // 视觉引导线的样式
						// color: '#000',
						// width: 1
					}
				}
			},
		},
		// {
		// 	data: [],
		// 	type: 'pie',                    // 系列类型 
		// 	center: ['50%', '50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
		// 	radius: ['52%', '70%'],        // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
		// 	hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
		// 	avoidLabelOverlap: false,
		// 	itemStyle: {},
		// 	label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
		// 		normal: {
		// 			show: false,             // 是否显示标签[ default: false ]
		// 			position: 'center',
		// 			formatter: '{b} \n\n {c} 人',  // 标签内容
		// 			rich: {
		// 				b: {
		// 					fontSize: 12,
		// 					align: 'left',
		// 				},
		// 				c: {
		// 					fontSize: 16,
		// 					align: 'left',
		// 					fontWeight: 'bold'
		// 				},
		// 				// hr: {
		// 				// 	borderColor: '#4681ec',
		// 				// 	width: '100%',
		// 				// 	borderWidth: 2,
		// 				// 	height: 0
		// 				// },

		// 			},
		// 		},
		// 		emphasis: {
		// 			show: false,
		// 			position: 'inner',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
		// 			// shadowColor: 'rgba(30,144,255,0.5)',
		// 			// formatter: '{c} \n {b} \n ',  // 标签内容
		// 			textStyle: {
		// 				fontSize: '16',
		// 				fontWeight: 'bolder'
		// 			},
		// 			length: 1
		// 		}
		// 	},
		// },
	]
};
export {
	leftFiveDutyOption,
	leftFourStateOption
};