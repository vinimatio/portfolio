function updateProfileInfo(profileData) {
    const avatar = document.getElementById('profile.photo');
    avatar.src = profileData.photo;
    avatar.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const zap = document.getElementById('profile.zap');
    zap.innerText = profileData.phone;
    zap.href = `tel:+55${profileData.phone}`;

    const email = document.getElementById('profile.mail');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
})()