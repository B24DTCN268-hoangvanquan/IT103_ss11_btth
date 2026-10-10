
const devices = [
    { id: "DEV01", name: "Dieu hoa", powerWatts: 1500, isActive: true },
    { id: "DEV02", name: "Quat", powerWatts: 60, isActive: true },
    { id: "DEV03", name: "Den", powerWatts: 40, isActive: true }
];

const findDeviceById = (devices, id) => {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === id) {
            return devices[i];
        }
    }
    return null;
};

const updateDeviceState = (devices, id, updateData) => {
    const device = findDeviceById(devices, id);

    if (device === null) {
        return false;
    }

    if (updateData.isActive !== undefined) {
        device.isActive = updateData.isActive;
    }

    if (updateData.powerWatts !== undefined) {
        device.powerWatts = updateData.powerWatts;
    }

    return true;
};

const calculateActivePower = (devices) => {
    let totalPower = 0;

    for (let i = 0; i < devices.length; i++) {
        if (devices[i].isActive) {
            totalPower += devices[i].powerWatts;
        }
    }

    return totalPower;
};

console.log("Danh sach ban dau:");
console.log(devices);
console.log("Tong cong suat:", calculateActivePower(devices), "W");

updateDeviceState(devices, "DEV01", { isActive: false });
updateDeviceState(devices, "DEV03", { powerWatts: 0 });

console.log("Danh sach sau cap nhat:");
console.log(devices);
console.log("Tong cong suat:", calculateActivePower(devices), "W");
