import AccountForm from './account-form'
import { createClient } from '@/utils/supabase/server'

export default function Account({ user }) {
  return <AccountForm user={user} />
}

export async function getServerSideProps() {
  const supabase = createClient()

  const { data: user, error } = await supabase.auth.getUser()

  if (error || !user) {
    return {
      notFound: true, // or handle error appropriately
    }
  }

  return {
    props: {
      user,
    },
  }
}
