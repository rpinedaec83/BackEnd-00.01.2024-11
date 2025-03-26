import { User, Package, Location, sequelize } from '../models/db.js';

export const getpackageSystems = async (req, res) => {
    try {
        const packageSystems = await Package.findAll();
        return res.status(200).json({ message: 'All packageSystems', packageSystems });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getpackageSystemById = async (req, res) => {
    const { id } = req.params;
    try {
        const packageSystem = await Package.findOne({ where: { id: id } });
        if (!packageSystem) {
            return res.status(300).json({ message: 'packageSystem is not exit.' });
        }
        return res.status(200).json({ message: 'packageSystem', packageSystem });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createpackageSystem = async (req, res) => {
    const { name, price, locationId, description, latitude, longitude  } = req.body;
    const user = req.user;

    try {
        const location = await Location.findOne({ where: { id: locationId } });
        if (!location) {
            return res.status(300).json({ message: 'Location is not exit.' });
        }

        const newpackageSystem = await Package.create({
            name: name,
            price: price,
            locationId: locationId,
            UserId: user.id,
            description: description
        });

        // const location = await Location.findOne({where: {id: id}});
        // if(!location) {
        //     return res.status(300).json({message: 'Location is not exit.'});
        // }

        location.PackageId = newpackageSystem.id;
        await location.save();

        return res.status(200).json({ message: 'packageSystem created successfully.', packageSystem: newpackageSystem, location });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updatepackageSystem = async (req, res) => {
    const { id } = req.params;
    const { name, price, locationId } = req.body;
    try {
        const packageSystem = await Package.findOne({ where: { id: id } });
        if (!packageSystem) {
            return res.status(300).json({ message: 'packageSystem is not exit.' });
        }

        const location = await Location.findOne({ where: { id: locationId } });
        if (!location) {
            return res.status(300).json({ message: 'Location is not exit.' });
        }

        Package.name = name;
        Package.price = price;
        Package.locationId = locationId;
        await Package.save();

        return res.status(200).json({ message: 'packageSystem updated successfully.', packageSystem });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deletepackageSystem = async (req, res) => {
    const { id } = req.params;
    try {
        const packageSystem = await Package.findOne({ where: { id: id } });
        if (!packageSystem) {
            return res.status(300).json({ message: 'packageSystem is not exit.' });
        }

        await Package.destroy();

        return res.status(200).json({ message: 'packageSystem deleted successfully.' });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}