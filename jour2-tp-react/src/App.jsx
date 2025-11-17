import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    country: ''
  });

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier si le mot de passe est valide
    const isPasswordValid = Object.values(passwordValidation).every(v => v === true);
    
    if (!isPasswordValid) {
      alert('❌ Votre mot de passe ne respecte pas toutes les règles !');
      return;
    }
    
    console.log('✅ Données du formulaire:', formData);
    alert('✅ Formulaire soumis avec succès ! Vérifiez la console.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Validation du mot de passe en temps réel
    if (name === 'password') {
      setPasswordValidation({
        minLength: value.length >= 8,
        hasUpperCase: /[A-Z]/.test(value),
        hasLowerCase: /[a-z]/.test(value),
        hasNumber: /[0-9]/.test(value),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value)
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Inscription
          </h1>
          <p className="text-gray-600">Créez votre compte en quelques secondes</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Nom */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Kocou Agossa"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sossou@gmail.com"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              required
            />
          </div>

          {/* Mot de passe */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              required
            />
            
            {/* Indicateurs de validation */}
            <div className="space-y-1 text-xs">
              <div className={`flex items-center gap-2 ${passwordValidation.minLength ? 'text-green-600' : 'text-gray-500'}`}>
                <span>{passwordValidation.minLength ? '✓' : '○'}</span>
                <span>Au moins 8 caractères</span>
              </div>
              <div className={`flex items-center gap-2 ${passwordValidation.hasUpperCase ? 'text-green-600' : 'text-gray-500'}`}>
                <span>{passwordValidation.hasUpperCase ? '✓' : '○'}</span>
                <span>Une lettre majuscule (A-Z)</span>
              </div>
              <div className={`flex items-center gap-2 ${passwordValidation.hasLowerCase ? 'text-green-600' : 'text-gray-500'}`}>
                <span>{passwordValidation.hasLowerCase ? '✓' : '○'}</span>
                <span>Une lettre minuscule (a-z)</span>
              </div>
              <div className={`flex items-center gap-2 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                <span>{passwordValidation.hasNumber ? '✓' : '○'}</span>
                <span>Un chiffre (0-9)</span>
              </div>
              <div className={`flex items-center gap-2 ${passwordValidation.hasSpecialChar ? 'text-green-600' : 'text-gray-500'}`}>
                <span>{passwordValidation.hasSpecialChar ? '✓' : '○'}</span>
                <span>Un caractère spécial (!@#$%...)</span>
              </div>
            </div>
          </div>

          {/* Genre et Pays en ligne */}
          <div className="grid grid-cols-2 gap-4">
            {/* Genre */}
            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Genre
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white cursor-pointer"
                required
              >
                <option value="">Choisir</option>
                <option value="Male">Homme</option>
                <option value="Female">Femme</option>
              </select>
            </div>

            {/* Pays */}
            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Pays
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white cursor-pointer"
                required
              >
                <option value="">Choisir</option>
                <option value="Benin">🇧🇯 Bénin</option>
                <option value="Togo">🇹🇬 Togo</option>
                <option value="Nigeria">🇳🇬 Nigéria</option>
                <option value="Ghana">🇬🇭 Ghana</option>
              </select>
            </div>
          </div>

          {/* Bouton de soumission */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Créer mon compte
          </button>

          {/* Lien de connexion */}
          <p className="text-center text-sm text-gray-600">
            Vous avez déjà un compte ?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Se connecter
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          En vous inscrivant, vous acceptez nos conditions d'utilisation
        </p>
      </div>
    </div>
  );
}

export default App;


// // Cas 1 : Toutes les règles respectées ✅
// [true, true, true, true, true].every(v => v === true)  // → true

// // Cas 2 : Une règle non respectée ❌
// [true, true, false, true, true].every(v => v === true) // → false
// ```

// ---

// ### 3️⃣ `const isPasswordValid = ...`

// **Ce que c'est :** Le résultat (true ou false) est stocké dans la variable `isPasswordValid`.

// ---

// ## 🎯 Schéma complet du processus
// ```
// passwordValidation (objet)
//          ↓
//   Object.values() 
//          ↓
//     [true, true, false, true, true] (tableau)
//          ↓
//     .every(v => v === true)
//          ↓
//   Parcourt chaque valeur :
//     - true === true ? ✅
//     - true === true ? ✅
//     - false === true ? ❌ STOP ! Retourne false
//          ↓
//     isPasswordValid = false