function calculateMinCost() {
   
            const ropeLengthsInput = document.getElementById('rope-lengths');
            const resultElement = document.getElementById('result');
            const inputText = ropeLengthsInput.value;
            const cost = connectRopes(inputText);
            resultElement.innerText = `Minimum cost of connecting ropes: ${cost}`;
        }

        function connectRopes(input) {
            const ropes = input.split(',').map(Number);
            
            const minHeap = new MinHeap();
            
            for (const rope of ropes) {
                minHeap.insert(rope);
            }
            
            let totalCost = 0;
            
            while (minHeap.size() > 1) {
                const rope1 = minHeap.extractMin();
                const rope2 = minHeap.extractMin();
                
                const cost = rope1 + rope2;
                totalCost += cost;
                
                minHeap.insert(cost);
            }
            
            return totalCost;
        }

        class MinHeap {
            // (Same MinHeap class as provided in the previous response)
        }
  
  
  
 
