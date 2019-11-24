let map = {
	"rooms": [
		{"id":"Front Porch","group":0}
		,{"id":"Foyer","group":1}
		,{"id":"Stairs","group":1}
		,{"id":"Parlor","group":1}
		,{"id":"Dining","group":1}
		,{"id":"Pantry","group":1}
		,{"id":"Library","group":1}
		,{"id":"Sitting","group":1}
		,{"id":"Back Porch","group":2}
		,{"id":"Gazebo","group":2}
		,{"id":"Oak","group":2}
		,{"id":"Iris","group":2}
		,{"id":"South Courtyard","group":2}
		,{"id":"Outside Cabin","group":3}
		,{"id":"Cane Fields","group":3}
		,{"id":"Cabin","group":3}
		,{"id":"Music","group":4}
		,{"id":"North Passage","group":4}
		,{"id":"Billiard","group":4}
		,{"id":"North Corner","group":4}
		,{"id":"Gallery","group":4}
		,{"id":"North Hall","group":4}
		,{"id":"Long","group":4}
		,{"id":"Baton Rouge","group":4}
		,{"id":"North Courtyard","group":5}
		,{"id":"Breezeway","group":5}
		,{"id":"Kitchen","group":5}
		,{"id":"Colonial","group":6}
		,{"id":"South Passage","group":6}
		,{"id":"Chapel","group":6}
		,{"id":"South Corner","group":6}
		,{"id":"South Hall","group":6}
		,{"id":"Southeast Hall","group":6}
		,{"id":"Study","group":6}
		,{"id":"Bedroom","group":6}
		,{"id":"Bathroom","group":6}
		,{"id":"Wine","group":7}
		,{"id":"2nd Stair","group":8}
		,{"id":"Rear Balcony","group":8}
		,{"id":"Bayou","group":8}
		,{"id":"Jackson","group":8}
		,{"id":"2nd Hall","group":8}
		,{"id":"Front Balcony","group":8}
		,{"id":"Magnolia","group":8}
		,{"id":"River","group":8}
		,{"id":"3rd Stair","group":9}
		,{"id":"3rd Hall","group":9}
		,{"id":"Storage","group":9}
		,{"id":"Lafitte","group":9}
		,{"id":"Schoolroom","group":9}
		,{"id":"Civil War","group":9}
		,{"id":"Attic","group":10}
	],
	"links": [
		{"source":"Foyer","target":"Front Porch"}
		,{"source":"Foyer","target":"Parlor"}
		,{"source":"Foyer","target":"Stairs"}
		,{"source":"Foyer","target":"Library"}
		,{"source":"Library","target":"Sitting"}
		,{"source":"Library","target":"South Passage"}
		,{"source":"South Passage","target":"Colonial"}
		,{"source":"South Passage","target":"South Courtyard"}
		,{"source":"South Passage","target":"South Corner"}
		,{"source":"Colonial","target":"Chapel"}
		,{"source":"Chapel","target":"South Corner"}
		,{"source":"South Corner","target":"South Hall"}
		,{"source":"South Hall","target":"Study"}
		,{"source":"South Hall","target":"Southeast Hall"}
		,{"source":"Study","target":"Wine"}
		,{"source":"Study","target":"Bedroom"}
		,{"source":"Bedroom","target":"Bathroom"}
		,{"source":"Bedroom","target":"Southeast Hall"}
		,{"source":"Southeast Hall","target":"Iris"}
		,{"source":"South Courtyard","target":"Iris"}
		,{"source":"Sitting","target":"Stairs"}
		,{"source":"Iris","target":"Back Porch"}
		,{"source":"Back Porch","target":"Gazebo"}
		,{"source":"Back Porch","target":"Rear Balcony"}
		,{"source":"Gazebo","target":"Oak"}
		,{"source":"Gazebo","target":"Outside Cabin"}
		,{"source":"Outside Cabin","target":"Cabin"}
		,{"source":"Outside Cabin","target":"Cane Fields"}
		,{"source":"Parlor","target":"North Passage"}
		,{"source":"Parlor","target":"Dining"}
		,{"source":"North Passage","target":"Music"}
		,{"source":"North Passage","target":"North Corner"}
		,{"source":"Music","target":"Billiard"}
		,{"source":"Billiard","target":"North Corner"}
		,{"source":"North Corner","target":"Gallery"}
		,{"source":"Dining","target":"Pantry"}
		,{"source":"Pantry","target":"Breezeway"}
		,{"source":"Breezeway","target":"Kitchen"}
		,{"source":"Breezeway","target":"North Courtyard"}
		,{"source":"Breezeway","target":"North Hall"}
		,{"source":"North Courtyard","target":"Gallery"}
		,{"source":"North Hall","target":"Baton Rouge"}
		,{"source":"North Hall","target":"Gallery"}
		,{"source":"Gallery","target":"Long"}
		,{"source":"Stairs","target":"2nd Stair"}
		,{"source":"Stairs","target":"Dining"}
		,{"source":"Stairs","target":"Back Porch"}
		,{"source":"2nd Stair","target":"Rear Balcony"}
		,{"source":"2nd Stair","target":"2nd Hall"}
		,{"source":"2nd Stair","target":"River"}
		,{"source":"2nd Stair","target":"Bayou"}
		,{"source":"Bayou","target":"Jackson"}
		,{"source":"Jackson","target":"2nd Hall"}
		,{"source":"2nd Hall","target":"Front Balcony"}
		,{"source":"2nd Hall","target":"Magnolia"}
		,{"source":"Magnolia","target":"River"}
		,{"source":"2nd Stair","target":"3rd Stair"}
		,{"source":"3rd Stair","target":"Lafitte"}
		,{"source":"3rd Stair","target":"Civil War"}
		,{"source":"Civil War","target":"Schoolroom"}
		,{"source":"Schoolroom","target":"3rd Hall"}
		,{"source":"3rd Hall","target":"3rd Stair"}
		,{"source":"3rd Hall","target":"Storage"}
		,{"source":"Storage","target":"Attic"}
	]
}

let treasures = [
	{"id":"Abacus","value":314,"source":"South Corner","target":"Schoolroom"}
	,{"id":"Armadillo","value":301,"source":"Rear Balcony","target":"Attic"}
	,{"id":"Awakening","value":1899,"source":"Jackson","target":"Library"}
	,{"id":"Basketball","value":510,"source":"Attic","target":"Billiard"}
	,{"id":"Beads","value":19,"source":"Parlor","target":"Front Balcony"}
	,{"id":"Belt","value":225,"source":"River","target":"Bayou"}
	,{"id":"Bible","value":305,"source":"Sitting","target":"Chapel"}
	,{"id":"Boa","value":49,"source":"Back Porch","target":"Front Balcony"}
	,{"id":"Bonnet","value":44,"source":"Outside Cabin","target":"Attic"}
	,{"id":"Bourbon sign","value":15,"source":"Study","target":"Colonial"}
	,{"id":"Bowl","value":68,"source":"3rd Stair","target":"Pantry"}
	,{"id":"Button","value":95,"source":"Civil War","target":"Long"}
	,{"id":"Candelabra","value":4000,"source":"2nd Stair","target":"Dining"}
	,{"id":"Cape","value":24,"source":"Billiard","target":"Front Balcony"}
	,{"id":"Catfish Statuette","value":7114,"source":"Library","target":"River"}
	,{"id":"Cavalry saber","value":415,"source":"Bayou","target":"Jackson"}
	,{"id":"Comb","value":101,"source":"Southeast Hall","target":"Bathroom"}
	,{"id":"Combination lock","value":32,"source":"Stairs","target":"Storage"}
	,{"id":"Confederacy","value":4,"source":"Schoolroom","target":"Library"}
	,{"id":"Bills","value":864,"source":"Sitting","target":"Civil War"}
	,{"id":"Diamond Ring","value":12495,"source":"Rear Balcony","target":"Study"}
	,{"id":"Doubloon","value":5340,"source":"Iris","target":"Lafitte"}
	,{"id":"Duck","value":215,"source":"Front Balcony","target":"Oak"}
	,{"id":"Evangeline","value":1847,"source":"Oak","target":"Library"}
	,{"id":"Fedora","value":11,"source":"North Hall","target":"Front Balcony"}
	,{"id":"Flag","value":89,"source":"Library","target":"Colonial"}
	,{"id":"Iris","value":543,"source":"North Courtyard","target":"Iris"}
	,{"id":"Vampire","value":666,"source":"Chapel","target":"Library"}
	,{"id":"Mask","value":14,"source":"Dining","target":"Front Balcony"}
	,{"id":"Miniature","value":158,"source":"Gallery","target":"Parlor"}
	,{"id":"Moviegoer","value":2685,"source":"Music","target":"Library"}
	,{"id":"Recipe","value":4456,"source":"Schoolroom","target":"Kitchen"}
	,{"id":"Painting","value":8188,"source":"Cabin","target":"Cane Fields"}
	,{"id":"Peach","value":25,"source":"Pantry","target":"Study"}
	,{"id":"Pillow","value":85,"source":"Lafitte","target":"Bedroom"}
	,{"id":"Poster","value":189,"source":"Baton Rouge","target":"Magnolia"}
	,{"id":"Purple suit","value":57,"source":"Bedroom","target":"Front Balcony"}
	,{"id":"Quilt","value":1427,"source":"Attic","target":"Cabin"}
	,{"id":"Radio","value":140,"source":"South Courtyard","target":"Music"}
	,{"id":"Record Cover","value":113,"source":"Storage","target":"Music"}
	,{"id":"Red stick","value":1699,"source":"Long","target":"Baton Rouge"}
	,{"id":"Rosary","value":270,"source":"Cane Fields","target":"Chapel"}
	,{"id":"Sampler","value":348,"source":"Kitchen","target":"Sitting"}
	,{"id":"Shelf clock","value":3419,"source":"Wine","target":"Sitting"}
	,{"id":"Steamboat","value":139,"source":"Magnolia","target":"River"}
	,{"id":"Super Bowl ticket","value":765,"source":"Study","target":"Billiard"}
	,{"id":"Tabasco","value":349,"source":"Bathroom","target":"Dining"}
	,{"id":"Trumpet","value":239,"source":"Gazebo","target":"Music"}
	,{"id":"Voodoo doll","value":46,"source":"2nd Hall","target":"Cabin"}
	,{"id":"Wine bottle","value":34,"source":"Colonial","target":"Wine"}
]

const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

function chart() {
	const links = map.links.map(d => Object.create(d))
	const nodes = map.rooms.map(d => Object.create(d))

	function findRoom(id) {
		for(let i=0; i<nodes.length; ++i) {
			if(nodes[i].id === id) return nodes[i]
		}
		throw new Error('Unknown room "'+id+'".')
	}
	const items = treasures.map(d => {
		let item = Object.create(d)
		item.source = findRoom(d.source)
		item.target = findRoom(d.target)
		return item
	})

	const width = 600/0.8, height = 600/0.8

	const simulation = d3.forceSimulation(nodes)
		.force("link", d3.forceLink(links).id(d => d.id))
		.force("charge", d3.forceManyBody())
		.force("center", d3.forceCenter(width/2, height/2))

	const svg = d3.create('svg')
		.attr('viewBox', [0, 0, width, height])
		.attr('width', width*0.8)
		.attr('height', height*0.8)
	
	svg.append('defs').append('marker')
		.attr('id', 'arrowhead')
		.attr('viewBox', '0 0 10 8')
		.attr('refX', "10")
		.attr('refY', "4")
		.attr('markerUnits', 'strokeWidth')
		.attr('markerWidth', "10")
		.attr('markerHeight', "10")
		.attr('orient', "auto")
		.append('svg:path')
		.attr('d', 'M 10 4 L 0 0 L 0 8 z')
		.attr('fill', '#c99')
		.attr('fill-opacity', 0.8)
		.style('stroke', 'none')

	const link = svg.append('g')
		.attr('stroke', '#444')
		.attr('stroke-width', 3)
		.selectAll('line')
		.data(links)
		.join('line')
		.attr('stroke-width', d => Math.sqrt(d.value))

	const R = 10
	const node = svg.append('g')
		.attr('stroke', '#fff')
		.attr('stroke-width', 1.5)
		.selectAll('circle')
		.data(nodes)
		.join('circle')
		.attr('r', R)
		.attr('fill', d => colorScale(d.group))
		.call(drag(simulation))

	node.append('title').text(d => d.id)

	const itemGroup = svg.append('g')
		.attr('stroke', '#c99')
		.attr('stroke-opacity', 0.8)

	let mx = -1000, my = -1000
	let near = 50
	const nearControl = document.getElementById('near')
	nearControl.addEventListener('input', (evt)=>{near = +evt.target.value})
	svg.on('mousemove', (evt) => {
		[mx, my] = d3.mouse(svg.node(0))
		updateItems()
	})

	function updateItems() {
		itemGroup
			.selectAll('line')
			.data(items.filter(nearMouse).map(adjustLength), d => d.id)
			.join('line')
				.attr('marker-end','url(#arrowhead)')
				.attr('x1', d => d.x1)
				.attr('y1', d => d.y1)
				.attr('x2', d => d.x2)
				.attr('y2', d => d.y2)
	}

	updateItems()
	function nearMouse(d) {
		let dx = d.source.x - mx
		let dy = d.source.y - my
		let dSource = dx * dx + dy * dy
		dx = d.target.x - mx
		dy = d.target.y - my
		let dTarget = dx * dx + dy * dy
		return Math.min(dSource, dTarget) < near * near
	}

	function adjustLength(d) {
		d.x1 = d.source.x, d.y1 = d.source.y
		d.x2 = d.target.x, d.y2 = d.target.y
		let dx = d.x2 - d.x1, dy = d.y2 - d.y1
		let dist = Math.sqrt(dx*dx + dy*dy)
		if(dist > 2 * R) {
			let ux = dx / dist, uy = dy / dist
			d.x1 += ux * R;  d.y1 += uy * R
			d.x2 -= ux * R;  d.y2 -= uy * R
		}
		return d
	}

	simulation.on('tick', () => {
		link
			.attr('x1', d => d.source.x)
			.attr('y1', d => d.source.y)
			.attr('x2', d => d.target.x)
			.attr('y2', d => d.target.y)

		node
			.attr('cx', d => d.x)
			.attr('cy', d => d.y)

		updateItems()
	})

	return svg.node()
}


function drag(simulation) {
	function dragstarted(d) {
		if(!d3.event.active) simulation.alphaTarget(0.3).restart()
		d.fx = d.x
		d.fy = d.y
	}

	function dragged(d) {
		d.fx = d3.event.x
		d.fy = d3.event.y
	}

	function dragended(d) {
		if(!d3.event.active) simulation.alphaTarget(0)
		d.fx = null
		d.fy = null
	}

	return d3.drag()
		.on('start', dragstarted)
		.on('drag', dragged)
		.on('end', dragended)
}

document.body.append(chart())
