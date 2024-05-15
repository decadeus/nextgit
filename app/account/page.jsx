import AccountForm from './account-form'
import { createClient } from '@/utils/supabase/server'

const Account = ({ user }) => {
  return <AccountForm user={user} />
}

Account.getInitialProps = async () => {
  const supabase = createClient()

  const { data: user, error } = await supabase.auth.getUser()

  if (error || !user) {
    return { user: null } // or handle error appropriately
  }

  return { user }
}

export default Account
