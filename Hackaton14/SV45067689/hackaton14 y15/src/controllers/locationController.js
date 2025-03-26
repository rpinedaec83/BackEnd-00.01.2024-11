import { where } from 'sequelize';
import { User, Package, Location, sequelize } from '../models/db.js';

export const createLocation = async (req, res) => {
    try {
        const { latitude, longitude } = req.body;
        const location = await Location.create({
            latitude: latitude,
            longitude: longitude
        });
        return res.status(200).json({ message: 'Location created successfully.', location: location });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getLocation = async (req, res) => {
    try {
        const locations = await Location.findAll();
        return res.status(200).json({ message: 'All locations', locations });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getLocationById = async (req, res) => {
    const { id } = req.params;
    try {
        const location = await Location.findOne({ where: { id: id } });
        if (!location) {
            return res.status(300).json({ message: 'Location is not exit.' });
        }
        return res.status(200).json({ message: 'Location', location });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateLocation = async (req, res) => {
    const { id } = req.params;
    const { latitude, longitude } = req.body;
    try {
        const location = await Location.findOne({ where: { id: id } });
        if (!location) {
            return res.status(300).json({ message: 'Location is not exit.' });
        }
        location.latitude = latitude;
        location.longitude = longitude;
        await location.save();

        return res.status(200).json({ message: 'Location updated successfully.', location });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateLocationForSocket = async (socket, data) => {
    try {
        const { packageId, latitude, longitude } = data;
        
        await Location.update(
            { latitude, longitude },
            { where: { id: packageId } }
          );

        socket.emit('updateLocation', { packageId, latitude, longitude });

    } catch (error) {
        console.error(error);
    }
}

export const deleteLocation = async (req, res) => {
    const { id } = req.params;
    try {
        const location = await Location.findOne({ where: { id: id } });
        if (!location) {
            return res.status(300).json({ message: 'Location is not exit.' });
        }
        await location.destroy();
        return res.status(200).json({ message: 'Location deleted successfully.' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}   