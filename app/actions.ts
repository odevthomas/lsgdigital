'use server'

export async function submitForm(formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      business: formData.get('business'),
      investment: formData.get('investment'),
      message: formData.get('message')
    }

    const response = await fetch('/api/diagnostico', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!result.success) {
      throw new Error(result.error)
    }

    return { success: true }
  } catch (error) {
    console.error('Form submission error:', error)
    return { 
      success: false, 
      error: 'Erro ao enviar formulário. Tente novamente.' 
    }
  }
}