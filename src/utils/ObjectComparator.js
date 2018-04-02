export const checkIfObjectsAreEqual = (object, objectToCompare) => {
    const objectCredentials = {
        username: objectToCompare.username,
        password: objectToCompare.password
    };

    const jsonOne = JSON.stringify(object);
    const jsonTwo = JSON.stringify(objectCredentials);

    return jsonOne === jsonTwo;
};