function calculateCapacity() {
    const material = document.getElementById('material').value;
    const thickness = parseFloat(document.getElementById('thickness').value) / 1000; // convert mm to meters
    const length = parseFloat(document.getElementById('length').value) * 0.0254; // convert inches to meters
    const width = parseFloat(document.getElementById('width').value) * 0.0254; // convert inches to meters
    const load = parseFloat(document.getElementById('load').value) * 9.81; // convert kg to Newtons
    const loadType = document.getElementById('loadType').value;
    const supportType = document.getElementById('supportType').value;

    // Material properties
    const materialProperties = {
        'MDF': { flexuralStrength: 40 * 10**6, youngsModulus: 3000 * 10**6 }, // MPa to Pa
        'Plywood': { flexuralStrength: 45 * 10**6, youngsModulus: 3500 * 10**6 },
        'Steel': { flexuralStrength: 250 * 10**6, youngsModulus: 210000 * 10**6 }
    };

    const properties = materialProperties[material];
    if (!properties) {
        document.getElementById('result').innerText = "Unknown material!";
        return;
    }

    // Calculate Moment of Inertia (I)
    const I = (width * Math.pow(thickness, 3)) / 12;

    // Calculate Maximum Bending Moment (M)
    let M;
    if (loadType === "uniform" && supportType === "allEdges") {
        M = (load * length * width) / 8;
    } else if (loadType === "point" && supportType === "twoEdges") {
        M = (load * length) / 4;
    } else if (loadType === "uniform" && supportType === "twoEdges") {
        M = (load * length) / 8;
    } else if (loadType === "point" && supportType === "allEdges") {
        M = (load * length * width) / 16;
    } else {
        document.getElementById('result').innerText = "Unsupported load or support type!";
        return;
    }

    // Calculate Maximum Bending Stress (σ_max)
    const y = thickness / 2;
    const sigma_max = (M * y) / I;

    // Convert the maximum load capacity back to kg
    const maxLoadCapacityInKg = (sigma_max * I) / (y * 9.81);

    // Check if the stress is within safe limits
    const safetyFactor = 1.5;
    const allowableStress = properties.flexuralStrength / safetyFactor;

    const resultElement = document.getElementById('result');
    if (sigma_max <= allowableStress) {
        resultElement.innerHTML = `
            <strong>Safe!</strong> The maximum stress is within the safe limits.<br>
            <strong>Calculated Stress:</strong> ${sigma_max.toFixed(2)} Pa<br>
            <strong>Allowable Stress:</strong> ${allowableStress.toFixed(2)} Pa<br>
            <strong>Maximum Load Capacity:</strong> ${maxLoadCapacityInKg.toFixed(2)} kg
        `;
    } else {
        resultElement.innerHTML = `
            <strong>Unsafe!</strong> The calculated stress exceeds the safe limit.<br>
            <strong>Calculated Stress:</strong> ${sigma_max.toFixed(2)} Pa<br>
            <strong>Allowable Stress:</strong> ${allowableStress.toFixed(2)} Pa<br>
            <strong>Maximum Load Capacity:</strong> ${maxLoadCapacityInKg.toFixed(2)} kg
        `;
    }
}
